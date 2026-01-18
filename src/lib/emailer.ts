import 'server-only';

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendFrom: string = process.env.RESEND_FROM ?? "noreply.theunreeltake@resend.dev";

export async function sendResetPasswordEmail(
  {emailTo, url}: {emailTo: string, url: string}
) {

  const { error } = await resend.emails.send({
    from: resendFrom,
    to: emailTo,
    subject: "Reset your password",
    text: `Click the link to reset your password: ${url}`
  });

  if(error) console.log(error.message);

}