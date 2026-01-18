import { betterAuth } from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import {admin} from "better-auth/plugins";
import {sendResetPasswordEmail} from "@/lib/emailer";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  advanced: {
    disableOriginCheck: true
  },
  trustedOrigins: [
    'http://localhost:3000',
    'https://theunreeltake-preview.vercel.app',
    'https://theunreeltake.vercel.app'
  ],
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      void sendResetPasswordEmail({emailTo: user.email, url: url});
    }
  },
  plugins: [
    admin()
  ]
});

export type Session = typeof auth.$Infer.Session;