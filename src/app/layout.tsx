import type { Metadata } from "next";
import React from "react";

import "./globals.scss";

export const metadata: Metadata = {
  title: "The Unreel Take",
  description: "WIP Description",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme={"dark"}>
      <body>
        {children}
      </body>
    </html>
  );
}
