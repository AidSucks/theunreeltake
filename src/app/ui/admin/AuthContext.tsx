"use client";

import React, {createContext} from "react";
import {Session} from "@/lib/auth";

export const AuthContext = createContext({} as Session);

export function AuthContextProvider(
  {children, session}: Readonly<{ children: React.ReactNode, session: Session}>
) {

  return (
    <AuthContext value={session}>
      {children}
    </AuthContext>
  );
}