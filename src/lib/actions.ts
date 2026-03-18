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

/**
 * Sends an email invitation to a user by the admin
 * * Flow:
 * 1. Validates that email is not already in the users table
 * 2. Generates a secure random UUID token
 * 3. Saves the token to the verification table with a 7 day expiration
 * 4. Sends the email via resend with the registration link
 * @param email the email address of the user that is being invited
 * @returns an object containing a success boolean or an error message
 */
export async function sendUserInvitation(email: string) {
  try {

    // Check if the user already exists in the database
    // If they do, then send message that the user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase()
      }
    }); 
    if (existingUser) {
      return { success: false, error: "A user with this email already exists." };
    }

    // Adding the id, token, and email to the verification table in prisma
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

    // Building the invite link, and then sending it
    const appUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000";
    const inviteLink = `${appUrl}/register?token=${token}&email=${encodeURIComponent(email)}`;

    const { error } = await resend.emails.send({
      from: "The UnReel Take <onboarding@resend.dev>", 
      to: email,
      subject: "You have been invited to join The UnReel Take",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to The UnReel Take!</h2>
          <p>You have been invited to join The UnReelTake team as a new writer.</p>
          <br/>
          <a href="${inviteLink}" style="padding: 12px 24px; background-color: #000; color: #fff; text-decoration: none; border-radius: 6px; display: inline-block;">
            Accept Invitation
          </a>
          <br/><br/>
          <p style="color: #666; font-size: 14px;">This link will expire in 7 days.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
    
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}