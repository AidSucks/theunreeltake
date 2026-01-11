'use client';

import {
  AspectRatio,
  Badge,
  Card,
  rem,
  Stack,
  Image,
  useMantineTheme,
  ActionIcon,
  Group,
  Text, Button, Flex,
} from '@mantine/core';

import classes from "./MoviePostCard.module.css";

import {CatalogItem} from "@/app/lib/schemas";
import {useElementSize} from "@mantine/hooks";
import {Flip} from "@gfazioli/mantine-flip";
import {useState} from "react";
import {X} from "react-bootstrap-icons";
import Link from "next/link";
import dayjs from "dayjs";

export function MoviePostCard(
  {
    postData
  }: {
    postData: CatalogItem
  }
) {

  const [isFlipped, setIsFlipped] = useState(false);

  const theme = useMantineTheme();

  const {ref, width} = useElementSize();

  return (
    <AspectRatio ratio={2 / 3} maw={400} ref={ref}>
      <Flip
        flipped={isFlipped}
        duration={0.6}
      >
        <Card
          className={classes.card}
          w={"100%"}
          h={"100%"}
          shadow={`3px 3px 10px ${theme.colors.gray[9]}`}
          p={0}
          radius={"md"}
          onClick={() => setIsFlipped(true)}
        >
          <Image
            alt={postData.title}
            w={"100%"}
            h={"100%"}
            src={postData.posterUrl}
          />
        </Card>

        <Card w={"100%"} h={"100%"} shadow={`3px 3px 10px ${theme.colors.gray[9]}`} radius={"md"} p={"xs"}>

          <Group align={"start"} h={"100%"} wrap={"nowrap"} gap={0}>

            <Flex direction={"column"} w={"100%"} h={"100%"}>


              <Stack align={"stretch"} h={"100%"} pb={"xs"} px={rem(width / 20)} gap={6}>

                <Text size={rem(width / 10)} fw={"bold"} lineClamp={2}>{postData.title}</Text>
                <Text size={rem(width / 12)} fw={"bold"}>({postData.releaseYear})</Text>
                <Badge style={{fontSize: rem(width / 24), height: rem(width / 12), width: rem(width / 4), padding: 0}}>{postData.mediaType}</Badge>

                <Text size={rem(width / 16)}>UnReel AR: {postData.rating.toFixed(1)}</Text>
                <Text size={rem(width / 16)}>Written By: {postData.author}</Text>
                <Text size={rem(width / 16)}>Posted: {dayjs(postData.datePosted).format("MMM D, YYYY")}</Text>



              </Stack>
            </Flex>

            <ActionIcon size={rem(width / 8)} onClick={() => setIsFlipped(false)}>
              <X size={Math.round(width / 10)}></X>
            </ActionIcon>
          </Group>


          <Button
            component={Link}
            href={`/blog/${postData.slug}`}
            size={"compact-sm"}
          >
            Read More
          </Button>
        </Card>
      </Flip>
    </AspectRatio>
  );
}