import React from "react";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";

import "@mantine/core/styles.css";
import '@gfazioli/mantine-flip/styles.css';

import Head from "next/head";

export default function RootAdminLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript/>
      </Head>
      <body>
        <MantineProvider defaultColorScheme={"light"}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}