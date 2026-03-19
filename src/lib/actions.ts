'use server';

import {RequestForm} from "@/lib/schemas";
import prisma from "@/lib/prisma";

export async function testRequestForm(data: RequestForm) {
  console.log(data);
}

export async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
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