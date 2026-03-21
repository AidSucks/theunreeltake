import type { Metadata } from "next";
import React from "react";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from "@mantine/core";

import "@mantine/core/styles.css";
import '@gfazioli/mantine-flip/styles.css';

import Head from "next/head";
import {HomeShell} from "@/app/ui/home/HomeShell";

export const metadata: Metadata = {
  title: "The Unreel Take",
  description: "WIP Description",
};

const buttonTheme = createTheme({
  colors: {
    black: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262b',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
  primaryColor: "black",
});

export default function HomeLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript/>
      </Head>
      <body>
        <MantineProvider defaultColorScheme={"light"}>
          <HomeShell>
            {children}
          </HomeShell>
        </MantineProvider>
      </body>
    </html>
  );
}
