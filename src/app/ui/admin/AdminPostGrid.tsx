"use client"

import { Card, Image, Box, Group, ActionIcon, Grid } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { DeletePostModal } from "./DeletePostModal";
import { deletePost } from "@/lib/actions";

type Post = {
    id: string;
    imageSrc: string;
}

type GridProps = {
    data: Post[];
    icons: Icons;
};

type Icons = {
    Edit: React.ElementType;
    Chat: React.ElementType;
    Stats: React.ElementType;
    Delete: React.ElementType;
}

export function PostCard({post, icons}: {post: Post; icons: Icons}) {
    const [opened, setOpened] = useState(false);
    const onConfirm = async () => {
        await deletePost(post.id);
        setOpened(false);
    }

    return (
        <>
            <Card
                shadow={"sm"}
                padding={"lg"}
                withBorder>
                <Card.Section>
                    <Box style={{ position: 'relative' }}>
                        <Image
                            alt={"Post Card"}
                            radius={"md"}
                            h={"300"} 
                            src={post.imageSrc} />
                        <Group
                            style={{
                                position: 'absolute',
                                bottom: 8,
                                right: 8
                            }}>
                            <ActionIcon
                                component={Link}
                                href={`/dashboard/posts/edit/${post.id}`}
                                variant={"light"}
                                size={"md"}
                                radius={"lg"}
                                color={"black"}>
                                <icons.Edit size={16}/>
                            </ActionIcon>
                            <ActionIcon
                                variant={"light"}
                                size={"md"}
                                radius={"lg"}
                                color={"black"}>
                                <icons.Chat size={16}/>
                            </ActionIcon>
                            <ActionIcon
                                variant={"light"}
                                size={"md"}
                                radius={"lg"}
                                color={"black"}>
                                <icons.Stats size={16}/>
                            </ActionIcon>
                            <ActionIcon
                                variant={"light"}
                                size={"md"}
                                radius={"lg"}
                                color={"black"}
                                onClick={() => setOpened(true)}>
                                <icons.Delete size={16}/>
                            </ActionIcon>
                        </Group>
                    </Box>
                </Card.Section>
            </Card>

            <DeletePostModal
                opened={opened}
                onClose={() => setOpened(false)}
                onConfirm={onConfirm}
            />
        </>
    );
}

export function PostGrid({ data, icons }: GridProps) {
    return (
        <Grid>
            {data.map((post) => (
                <Grid.Col
                    key={post.id}
                    style={{ minWidth: 300 }}
                    span={{ base: 12, sm: 6, md: 3}}>
                        <PostCard post={post} icons={icons}/>
                </Grid.Col>
            ))}
        </Grid>
    )
}