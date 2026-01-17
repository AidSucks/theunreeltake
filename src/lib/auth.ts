import { betterAuth } from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import {admin} from "better-auth/plugins";

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
    enabled: true
  },
  plugins: [
    admin()
  ]
})