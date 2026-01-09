
import * as z from "zod";

import {
  AllowedMediaType,
  maxTextInputLength,
  maxTextAreaLength
} from "@/app/lib/constants";

export type CatalogItem = z.infer<typeof CatalogItemSchema>;
export type RequestForm = z.infer<typeof RequestFormSchema>;

const httpUrl = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.hostname
});

export const CatalogItemSchema = z.object({
  slug: z.string().default(""),
  title: z.string().default(""),
  rating: z.number().positive().default(0),
  posterUrl: httpUrl.default("")
});

export const RequestFormSchema = z.object({
  name: z.string().max(maxTextInputLength).optional(),
  email: z.email({ error: "Invalid Email" }).nonempty({ error: "Required" }),
  title: z.string().max(maxTextInputLength).nonempty({ error: "Required" }),
  mediaType: z.enum(AllowedMediaType),
  message: z.string().max(maxTextAreaLength).optional()
});