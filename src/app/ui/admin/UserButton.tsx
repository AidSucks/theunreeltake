import { ChevronRight } from "react-bootstrap-icons";
import {Avatar, Badge, Box, Group, rem, Text, UnstyledButton} from '@mantine/core';
import classes from './UserButton.module.css';
import {useContext} from "react";
import {AuthContext} from "@/app/ui/admin/AuthContext";

export function UserButton() {

  const data = useContext(AuthContext);

  return (
    <UnstyledButton className={classes.user}>
      <Group gap={0} w={250}>
        <Box>
          <Avatar
            variant={"light"}
            src={data?.user.image}
            radius={"xs"}
            size={40}
          >
            {data?.user.name.split(" ").slice(0, 2).map(x => x[0])}
          </Avatar>

        </Box>

        <Box w={175} mx={"xs"}>
          <Text size="sm" fw={500} truncate={"end"}>
            {data?.user.name}
          </Text>

          <Text c="dimmed" size="xs" truncate={"end"}>
            {data?.user.email}
          </Text>

        </Box>

        <ChevronRight size={14} />
      </Group>

      <Badge h={17} maw={75} px={5} color={data?.user.role === "admin" ? "red" : "blue"}>
        <Text size={rem(9)} fw={700} truncate={"end"}>{data?.user.role}</Text>
      </Badge>

    </UnstyledButton>
  );
}