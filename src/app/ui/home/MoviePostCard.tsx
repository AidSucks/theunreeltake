'use client';

import {
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
} from '@mantine/core';

import Link from "next/link";

export function MoviePostCard() {

  return (
    <Card withBorder radius="md">
      <Card.Section>
        <Link href={'#'}>
          <Image src="https://placehold.co/260x180" height={180} alt={""}/>
        </Link>
      </Card.Section>

      <Badge variant={"filled"} mt={"xs"}>
        Badge/tags
      </Badge>

      <Text fw={500} component="a">
        Name of Movie or Book
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        Some text goes here because there's some text that needs to go here.
        Some text goes here because there's some text that needs to go here.
        Some text goes here because there's some text that needs to go here.
        Some text goes here because there's some text that needs to go here.
      </Text>

      <Group justify="space-between">
        <Center>
          <Avatar
            src="https://placehold.co/32x32"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            John Doe
          </Text>
        </Center>
      </Group>
    </Card>
  );
}