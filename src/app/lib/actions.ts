'use server';

import {signIn, signOut} from "@/auth";

export async function logIn(provider: string) {
  await signIn(provider, {redirectTo: "/dashboard"});
}

export async function logOut() {
  await signOut({redirectTo: "/"});
}