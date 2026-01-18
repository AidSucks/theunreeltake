import 'server-only';

import {Resend} from "resend";
import {User} from "@/lib/auth";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendFrom: string = process.env.RESEND_FROM ?? "noreply.theunreeltake@resend.dev";

export async function sendResetPasswordEmail(
  {emailTo, url}: {emailTo: string, url: string}
) {

  await resend.emails.send({
    from: resendFrom,
    to: emailTo,
    subject: "Reset your password",
    text: `Click the link to reset your password: ${url}`
  });

}

export async function sendPasswordWasResetEmail(
  user: Pick<User, "email" | "name">
) {

  await resend.emails.send({
    from: resendFrom,
    to: user.email,
    subject: "Password Reset",
    text: `Hello, ${user.name}. Your password has been reset. If this wasn't you, please contact your administrator.`
  });
}

export async function sendMagicLinkEmail(
  {emailTo, url}: {emailTo: string, url: string}
) {

  await resend.emails.send({
    from: resendFrom,
    to: emailTo,
    subject: "Sign into your account",
    text: `Click the link to sign into your account on The UnReel Take: ${url}`
  });
}