"use server";

import {RequestForm} from "@/lib/schemas";
import prisma from "@/lib/prisma";
import {cookies, headers} from "next/headers";
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

export async function createNewPost(formData: { title: string, slug: string, mediaType: string, pageContent: string, published: boolean }) {
  try {

    const session = await auth.api.getSession({
      headers: await headers()
    });

    if(!session || !session.user) {
      return { error: "You must be logged in to create a post.", success: false };
    }
    await prisma.post.create({
      data: {
        title: formData.title,
        slug: formData.slug,
        htmlContent: formData.pageContent,
        published: formData.published,
        authorId: session.user.id,
        tags: {
          create: {
            tag: {
              create: {
                type: "MediaType",
                displayName: formData.mediaType,
              }
            }
          }
        }
      }
    });

    return { error: null, success: true };
  } catch (error) {
    console.error("PRISMA DATABASE ERROR:", error);
    return { error: "Failed to save post", success: false };
  }
}

export async function createTriviaCookie() {

  const cookieStore = await cookies();

  cookieStore.set({
    name: "unreel",
    value: "",
    priority: "low",
    httpOnly: true,
    sameSite: "strict",
    expires: dayjs(new Date()).add(1, "year").toDate()
  });
}

export async function deleteUser(id : string){
  try{
      const deleteUser = await prisma.user.delete({
        where: {id},
      });
    return {data: deleteUser, error: "none"};
  } catch(e){
    console.error("Database Error: ", e);
    return {data: null, error: "User not found"};
  }
}

export async function getAllUsers(Id?: string) {
  try {
    return await prisma.user.findMany({
      where: Id ? { NOT: { id: Id } } : undefined,
    });
  } catch (e) {
    console.error("Error fetching users:", e);
    return null;
  }
}

export async function deletePost(id:string)
{
  console.log("deleting post with id: ", id);
  try
  {
    await prisma.post.delete({
      where:{
        id: id,
      }
    });

    return { error: null, success: true};
  } catch (error) {
    return { error: "Failed to delete post", success: false };
  }
}

export async function savePost(id:string, title:string, slug:string, mediaType:string, content:string, published: boolean)
{
  console.log("saving post with id: ", id)
  try
  {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        slug: slug,
        htmlContent: content,
        published: published
      }
    });
    return { error: null, success: true};
  } catch (error) {
    return { error: "Failed to save post", success: false };
  }
}

export async function getDraftPosts() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session || !session.user) {
      return { success: false, data: [] };
    }

    const draftPosts = await prisma.post.findMany({
      where: {
        authorId: session.user.id,
        published: false,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    const formattedDrafts = draftPosts.map((post) => ({
      id: post.id,
      imageSrc: post.posterUrl || "https://placehold.co/600x400?text=No+Poster",
    }));

    return { success: true, data: formattedDrafts };
  } catch (error) {
    console.error("Failed to fetch drafts:", error);
    return { success: false, data: [] };
  }
}

