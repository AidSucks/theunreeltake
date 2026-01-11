"use client";

import {Button, ColorSchemeScript, mantineHtmlProps, MantineProvider} from "@mantine/core";
import Head from "next/head";
import React from "react";

import "@mantine/core/styles.css";
import {authClient} from "@/lib/auth-client";

export default function LoginPage() {

  const { data } = authClient.useSession();

  return (
    <html lang={"en"} {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript/>
      </Head>
      <body>
        <MantineProvider defaultColorScheme={"light"}>

          <p>{data?.user.name}</p>

          <h1>Login</h1>
          <Button onClick={async () => await authClient.signIn.social({ provider: "google" })}>Login</Button>
        </MantineProvider>
      </body>
    </html>
  );
}