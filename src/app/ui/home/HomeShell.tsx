'use client';

import {AppShell, rem} from "@mantine/core";
import React from "react";
import {HomeHeader} from "@/app/ui/home/HomeHeader";
import {useHeadroom} from "@mantine/hooks";

export function HomeShell(
  {children}: Readonly<{children: React.ReactNode}>
) {

  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: {base: 60, sm: 120}, collapsed: !pinned, offset: false }}
      padding={"sm"}>

      <AppShell.Header>
        <HomeHeader/>
      </AppShell.Header>

      <AppShell.Main h={"100vh"} pt={`calc(${rem(120)} + var(--mantine-spacing-sm))`}>
        {children}
      </AppShell.Main>

    </AppShell>
  );
}