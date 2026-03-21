"use server";

import {ChangePasswordForm, RequestForm} from "@/lib/schemas";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import * as crypto from "node:crypto";
import dayjs from "dayjs";
import {Verification} from "@/generated/prisma/client";
import { sendInvitationEmail } from "@/lib/emailer";
import { sendPasswordWasResetEmail } from "@/lib/emailer";
import { success } from "zod";


export async function testRequestForm(data: RequestForm) {
  console.log(data);
}

export async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}

function generateInvitationToken(): string {

  const byteLength = 6;

  const bytes = crypto.randomBytes(byteLength);

  let code = "";

  bytes.forEach((byte) => {
    code += String.fromCharCode((byte % 26) + 65);
  });

  return code;
}

export async function createInvitationVerification(email: string) {

  const now = new Date();
  const token = generateInvitationToken();
  const data = {
    id: crypto.randomUUID(),
    identifier: token,
    value: email,
    createdAt: now,
    updatedAt: now,
    expiresAt: dayjs(now).add(7, "day").toDate()
  }

  await prisma.verification.create({
    data: data
  });

  await sendInvitationEmail(email, token);
}

export async function verifyInvitationToken(token: string): Promise<{data: Verification | null, error: string | null}> {

  const verification = await prisma.verification.findFirst({
    where: {
      identifier: token
    }
  });

  if(!verification)
    return { data: null, error: "Invalid Token" }

  if(verification.expiresAt < new Date()) {

    await deleteInvitationToken(verification.id);

    return {data: null, error: "Token Expired"}
  }

  return { data: verification, error: null };
}

export async function deleteInvitationToken(id: string): Promise<{ statusMessage: string, success: boolean }> {

  try {
    await prisma.verification.delete({
      where: {
        id: id
      }
    });
  } catch (error) {
    return { statusMessage: "Error deleting invitation token", success: false }
  }

  return { statusMessage: "Successfully deleted token", success: true }
}

// Removed sendUserInvitaion,
// Only needs to check if the user exists
export async function checkUserExists(email: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase()
      }
    });

    // Returns true if the user exists and false if they dont
    return !!existingUser;
  } catch (error) {
    console.error("Database Error: ", error);
    return true;
  }
}

export async function notifyPasswordChanged() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (session && session.user) {
    await sendPasswordWasResetEmail({
      name: session.user.name,
      email: session.user.email
    });
  }
}