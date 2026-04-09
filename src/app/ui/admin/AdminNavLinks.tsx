'use client';

import {NavLink, Text} from "@mantine/core";
import classes from "@/app/ui/admin/NavbarSimple.module.css";
import React from "react";
import {BarChartLine, ChatLeftDots, FileRichtext, Gear, House, Journal, People, Send} from "react-bootstrap-icons";
import {usePathname} from "next/navigation";

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: House, disabled: false},
<<<<<<< HEAD
  { link: '/dashboard/posts', label: 'Posts', icon: FileRichtext, disabled: false},
=======
  { link: '/dashboard/posts/edit', label: 'Posts', icon: FileRichtext, disabled: false},
>>>>>>> 23969424fa687ce1cfab2f22ee27f862a6fd4780
  { link: '/dashboard/drafts', label: 'Drafts', icon: Journal, disabled: true},
  { link: '/dashboard/comments', label: 'Comments', icon: ChatLeftDots, disabled: true},
  { link: '/dashboard/requests', label: 'Requests', icon: Send, disabled: true},
  { link: '/dashboard/analytics', label: 'Analytics', icon: BarChartLine, disabled: true},
  { link: '/dashboard/users', label: 'Users', icon: People, disabled: false},
];

export default function AdminNavLinks() {

  const pathname = usePathname();

  return (
    <>
      {
        data.map((item) =>
          <NavLink
            className={classes.link}
            disabled={item.disabled}
            leftSection={<item.icon size={22}/>}
            label={<Text fw={500}>{item.label}</Text>}
            active={item.link === pathname}
            href={item.link}
            key={item.label}
          />
        )
      }
    </>
  );
}