
import * as z from "zod";

import {
  AllowedMediaType,
  maxTextInputLength,
  maxTextAreaLength
} from "@/lib/constants";

export type CatalogItem = z.infer<typeof CatalogItemSchema>;
export type RequestForm = z.infer<typeof RequestFormSchema>;
export type LoginForm = z.infer<typeof LoginFormSchema>;
export type CreateUserForm = z.infer<typeof CreateUserSchema>;
export type ChangePasswordForm = z.infer<typeof ChangePasswordSchema>;
export type ForgotPasswordForm = z.infer<typeof ForgotPasswordSchema>;
export type ResetPasswordForm = z.infer<typeof ResetPasswordSchema>;

const httpUrl = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.hostname
});

export const CatalogItemSchema = z.object({
  author: z.string().default("Unknown Author"),
  datePosted: z.date().default(new Date()),
  slug: z.string().default(""),
  title: z.string().default(""),
  rating: z.number().positive().default(0),
  releaseYear: z.string().default(""),
  posterUrl: httpUrl.default(""),
  mediaType: z.string().default(AllowedMediaType.Book)
});

export const CreateUserSchema = z.object({
  name: z.string().max(maxTextInputLength).nonempty("Required"),
  email: z.email().nonempty("Required"),
  password: z.string().nonempty("Required")
});

export const RequestFormSchema = z.object({
  name: z.string().max(maxTextInputLength).optional(),
  email: z.email({ error: "Invalid Email" }).nonempty({ error: "Required" }),
  title: z.string().max(maxTextInputLength).nonempty({ error: "Required" }),
  mediaType: z.enum(AllowedMediaType),
  message: z.string().max(maxTextAreaLength).optional()
});

export const LoginFormSchema = z.object({
  email: z.email({ error: "Invalid email"}).nonempty({ error: "Required" }),
  password: z.string().nonempty({ error: "Required" })
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().nonempty({ error: "Required" }),
  newPassword: z.string().nonempty({ error: "Required" }),
});

export const ForgotPasswordSchema = LoginFormSchema.pick({
  email: true
});

export const ResetPasswordSchema = LoginFormSchema.pick({
  password: true,
});

export const InviteUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Required" })
});

export type InviteUserForm = z.infer<typeof InviteUserSchema>;