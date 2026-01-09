'use client';

import {
  AspectRatio,
  BackgroundImage,
  Badge,
  Card,
  Rating,
  rem,
  Stack,
} from '@mantine/core';

import classes from "./MoviePostCard.module.css";

import Link from "next/link";
import {CatalogItem} from "@/app/lib/schemas";
import {useElementSize} from "@mantine/hooks";

export function MoviePostCard(
  {
    postData
  }: {
    postData: CatalogItem
  }
) {

  const {ref, width} = useElementSize();

  return (
    <AspectRatio ratio={2 / 3} maw={400} className={classes.card} ref={ref}>
      <Card
        component={Link}
        href={`/blog/${postData.slug}`}
        w={"100%"}
        h={"100%"}
        shadow={"5px 5px 10px gray"}
        p={0}
        radius={"md"}
      >

        <BackgroundImage
          w={"100%"}
          h={"100%"}
          src={postData.posterUrl}
        >

            <Stack align={"stretch"} justify={"flex-end"} h={"100%"} p={"sm"} gap={6}>

              {/**
              <Rating size={width / 12} value={postData.rating} fractions={2} count={10} readOnly/>
              <Badge style={{fontSize: rem(width / 24), height: rem(width / 12), width: rem(width / 4), padding: 0}}>Movie</Badge>
              **/}
            </Stack>

        </BackgroundImage>

      </Card>
    </AspectRatio>
  );
}