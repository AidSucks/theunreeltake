'use client';

import {AppShell, rem} from "@mantine/core";
import React from "react";
import {HomeHeader} from "@/app/ui/home/HomeHeader";
import {HomeFooter} from "@/app/ui/home/HomeFooter";
import {useHeadroom} from "@mantine/hooks";

export function HomeShell(
  {children}: Readonly<{children: React.ReactNode}>
) {

  const headroom = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: {base: 60, sm: 80}, collapsed: !headroom.pinned, offset: false }}
      padding={"sm"}>

      <AppShell.Header>
        <HomeHeader/>
      </AppShell.Header>

      <AppShell.Main
        h={"100%"}
        style={{ display: "flex", flexDirection: "column" }}
        pt={`calc(${rem(80)} + var(--mantine-spacing-sm))`}
      >
        {children}

        <HomeFooter/>
      </AppShell.Main>
    </AppShell>
  );
}