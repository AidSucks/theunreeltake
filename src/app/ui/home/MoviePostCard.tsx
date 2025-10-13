'use client';

import {
  AspectRatio,
  Avatar,
  Card,
  Flex,
  Image,
  Rating,
  Text,
  Title,
} from '@mantine/core';

import Link from "next/link";
import {PostData} from "@/app/lib/actions";

export function MoviePostCard(
  {
    postData
  }: {
    postData: PostData
  }
) {

  return (
    <AspectRatio ratio={400 / 750} maw={400}>
      <Card
        withBorder
        shadow={"md"}
        p={"md"}
        radius={"md"}>

        <Card.Section
          component={Link}
          href={"#"}>
          <AspectRatio ratio={400 / 500} maw={400}>
            <Image
              src={"https://placehold.co/400x600?text=Media+Image"}
              alt={"Media Image"}/>
          </AspectRatio>
        </Card.Section>

        <Flex direction={"column"} gap={{base: 5, md: 10}} h={"100%"} mt={5} justify={"center"}>
          <Title order={5} lineClamp={2}>
            {postData.Title}
          </Title>

          <Rating size={17} value={postData.imdbRating} fractions={4} count={10} readOnly/>

          <Flex gap={"xs"}>
            <Avatar
              src={"https://placehold.co/000000/FFF/16?text=Avatar"}
              alt={"Avatar"}/>

            <Flex gap={0} direction={"column"}>
              <Text size={"xs"} lineClamp={1} span>
                {postData.Director}
              </Text>
              <Text size={"xs"} c={"dimmed"}>
                Date Information
              </Text>
            </Flex>
          </Flex>
        </Flex>

      </Card>
    </AspectRatio>
  );
}