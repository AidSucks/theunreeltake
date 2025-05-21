'use server';

import {signIn, signOut} from "@/auth";
import {RequestSchema} from "@/app/ui/home/forms/RequestForm";

export async function logIn(provider: string) {
  await signIn(provider, {redirectTo: "/dashboard"});
}

export async function logOut() {
  await signOut({redirectTo: "/"});
}

export async function testRequestForm(data: RequestSchema) {
  console.log(data);
}

async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}