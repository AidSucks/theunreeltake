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
      header={{ height: {base: 60, sm: 120}, collapsed: !headroom.pinned, offset: false }}
    >

      <AppShell.Header>
        <HomeHeader/>
      </AppShell.Header>

      <AppShell.Main
        h={"100%"}
        style={{ display: "flex", flexDirection: "column" }}
        pt={{base: `calc(${rem(60)})`, sm: `calc(${rem(120)})`}}
      >
        {children}

        <HomeFooter/>
      </AppShell.Main>
    </AppShell>
  );
}