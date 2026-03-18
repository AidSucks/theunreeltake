'use server';

import {RequestForm} from "@/lib/schemas";
import { Resend } from "resend";
import prisma from "@/lib/prisma";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function testRequestForm(data: RequestForm) {
  console.log(data);
}

export async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}

export async function sendUserInvitation(email: string) {
  try {
    const token = crypto.randomUUID();
    
    await prisma.verification.create({
      data: {
        id: crypto.randomUUID(),
        identifier: `invite-${email}`,
        value: token,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    const appUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000";
    const inviteLink = `${appUrl}/register?token=${token}&email=${encodeURIComponent(email)}`;

    console.log("==========================================");
    console.log("TESTING INVITE LINK:", inviteLink);
    console.log("==========================================");

    // Bypassing Resend for local testing
    return { success: true };
    
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}