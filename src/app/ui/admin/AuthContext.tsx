"use client";

import React, {createContext} from "react";
import {AuthContextData} from "@/lib/schemas";

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider(
  {children, session}: Readonly<{ children: React.ReactNode, session: AuthContextData }>
) {

  return (
    <AuthContext value={session}>
      {children}
    </AuthContext>
  );
}