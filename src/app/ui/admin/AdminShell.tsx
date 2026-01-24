"use client";

import React, {useContext} from "react";
import {Anchor, AppShell, Badge, Box, Button, Code, NavLink, rem, ScrollArea, Stack, Text} from '@mantine/core';
import {SignOutButton} from "@/app/ui/admin/SignOutButton";
import {UserButton} from "@/app/ui/admin/UserButton";
import {
  BarChartLine,
  ChatLeftDots,
  FileRichtext,
  Gear,
  House,
  Journal, Lock,
  People,
  Send
} from "react-bootstrap-icons";

import classes from './NavbarSimple.module.css';
import pack from "@/../package.json";
import {useDisclosure} from "@mantine/hooks";
import {AuthContext} from "@/app/ui/admin/AuthContext";
import {usePathname} from "next/navigation";
import Link from "next/link";

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: House, disabled: false},
  { link: '/dashboard/posts', label: 'Posts', icon: FileRichtext, disabled: true},
  { link: '/dashboard/drafts', label: 'Drafts', icon: Journal, disabled: true},
  { link: '/dashboard/comments', label: 'Comments', icon: ChatLeftDots, disabled: true},
  { link: '/dashboard/requests', label: 'Requests', icon: Send, disabled: true},
  { link: '/dashboard/analytics', label: 'Analytics', icon: BarChartLine, disabled: true},
  { link: '/dashboard/users', label: 'Users', icon: People, disabled: false},
  { link: '/dashboard/settings', label: 'Settings', icon: Gear, disabled: true},
];

export function AdminShell(
  {children}: Readonly<{ children: React.ReactNode; }>
) {

  const contextData = useContext(AuthContext);

  const [opened, { toggle }] = useDisclosure();

  const pathname = usePathname();

  const links = data.map((item) => (
    <NavLink
      className={classes.link}
      disabled={item.disabled}
      leftSection={<item.icon size={22}/>}
      label={<Text fw={500}>{item.label}</Text>}
      active={item.link === pathname}
      href={item.link}
      key={item.label}
    />
  ));

  return (

    <AppShell
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened }}}
      padding="md">

      <AppShell.Navbar>
        <AppShell.Section component={ScrollArea} scrollbars={"y"} scrollbarSize={6}>
          <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
              <Stack gap={7} className={classes.header} >

                <Box mx={7}>
                  <Code fw={700} color={"gray.2"}>v{pack.version}</Code>
                </Box>
                <UserButton/>

                <Badge h={14} maw={75} px={5} ml={7} radius={"sm"} color={contextData.user.role === "admin" ? "red" : "blue"}>
                  <Text size={rem(9)} fw={700} truncate={"end"}>{contextData.user.role}</Text>
                </Badge>

              </Stack>
              {links}

            </div>

            <div className={classes.footer}>

              <Anchor href={"/"}>View Homepage</Anchor>

              <Button
                component={Link}
                href={"/dashboard/change-password"}
                leftSection={<Lock size={18}/>}
                justify={"start"}
                color={"dark"}
                variant={"subtle"}
                fullWidth
                prefetch={false}
              >
                <span>Change password</span>
              </Button>

              <SignOutButton/>

            </div>
          </nav>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}