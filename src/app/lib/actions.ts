'use server';

import {signIn, signOut} from "@/auth";

import {RequestForm} from "@/app/lib/schemas";

export async function logIn(provider: string) {
  await signIn(provider, {redirectTo: "/dashboard"});
}

export async function logOut() {
  await signOut({redirectTo: "/"});
}

export async function testRequestForm(data: RequestForm) {
  console.log(data);
}

export async function artificialLag(delayMs: number) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}