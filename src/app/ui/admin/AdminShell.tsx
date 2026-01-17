"use client";

import React, {useState} from "react";
import {Anchor, AppShell, Box, Code, NavLink, Stack, Text} from '@mantine/core';
import {SignOutButton} from "@/app/ui/admin/SignOutButton";
import {UserButton} from "@/app/ui/admin/UserButton";
import {BarChartLine, ChatLeftDots, FileRichtext, Gear, House, Journal, People, Send} from "react-bootstrap-icons";

import classes from './NavbarSimple.module.css';
import pack from "@/../package.json";
import {useDisclosure} from "@mantine/hooks";

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
      navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened }}}
      padding="md">

      <AppShell.Navbar>
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Stack gap={"xs"} className={classes.header} >
              <Box>
                <Code fw={700} color={"gray.2"}>v{pack.version}</Code>
              </Box>
              <UserButton/>

            </Stack>
            {links}
          </div>

          <div className={classes.footer}>

            <Anchor href={"/"}>View Homepage</Anchor>

            <SignOutButton/>

          </div>
        </nav>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}