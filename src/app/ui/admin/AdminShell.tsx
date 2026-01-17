"use client";

import React, {useContext, useState} from "react";
import {Anchor, AppShell, Badge, Box, Code, NavLink, rem, ScrollArea, Stack, Text} from '@mantine/core';
import {SignOutButton} from "@/app/ui/admin/SignOutButton";
import {UserButton} from "@/app/ui/admin/UserButton";
import {BarChartLine, ChatLeftDots, FileRichtext, Gear, House, Journal, People, Send} from "react-bootstrap-icons";

import classes from './NavbarSimple.module.css';
import pack from "@/../package.json";
import {useDisclosure} from "@mantine/hooks";
import {AuthContext} from "@/app/ui/admin/AuthContext";

const data = [
  { link: '', label: 'Dashboard', icon: House, disabled: false},
  { link: '', label: 'Posts', icon: FileRichtext, disabled: false},
  { link: '', label: 'Drafts', icon: Journal, disabled: false},
  { link: '', label: 'Comments', icon: ChatLeftDots, disabled: false},
  { link: '', label: 'Requests', icon: Send, disabled: false},
  { link: '', label: 'Analytics', icon: BarChartLine, disabled: false},
  { link: '', label: 'Users', icon: People, disabled: false},
  { link: '', label: 'Settings', icon: Gear, disabled: false},
];

export function AdminShell(
  {children}: Readonly<{ children: React.ReactNode; }>
) {

  const contextData = useContext(AuthContext);

  const [opened, { toggle }] = useDisclosure();

  const [active, setActive] = useState('Dashboard');

  const links = data.map((item) => (
    <NavLink
      className={classes.link}
      disabled={item.disabled}
      leftSection={<item.icon size={22}/>}
      label={<Text fw={500}>{item.label}</Text>}
      active={item.label === active}
      href={item.link}
      key={item.label}
      onClick={event => {
        event.preventDefault();
        setActive(item.label);
      }}
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