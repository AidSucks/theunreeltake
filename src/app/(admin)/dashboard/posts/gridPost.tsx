/*
Template for the Grid post
    Can change
        icon: size, color, position etc..
        card: padding, shadow, etc..
*/

"use client"

import { Card, Image, Box, Group, ActionIcon } from "@mantine/core";
import type { Icon } from "react-bootstrap-icons"

type ImageIconType = {
    imageSrc: string;
    icon_1: Icon;
    icon_2: Icon;
    icon_3: Icon;
    icon_4: Icon;
};

export function GridPostCard({ imageSrc, icon_1: EditIcon, icon_2: ChatIcon, icon_3: BarIcon, icon_4: TrashIcon}: ImageIconType) {
    return (
        <Card
            shadow={"sm"}
            padding={"lg"}
            withBorder>
            <Card.Section>
                <Box style={{ position: 'relative' }}>
                    <Image
                        radius={"md"}
                        h={"300"} 
                        src={imageSrc} />
                    <Group
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8
                        }}>
                        <ActionIcon
                            variant={"light"}
                            size={"md"}
                            radius={"lg"}
                            color={"black"}>
                            <EditIcon size={16}/>
                        </ActionIcon>
                        <ActionIcon
                            variant={"light"}
                            size={"md"}
                            radius={"lg"}
                            color={"black"}>
                            <ChatIcon size={16}/>
                        </ActionIcon>
                        <ActionIcon
                            variant={"light"}
                            size={"md"}
                            radius={"lg"}
                            color={"black"}>
                            <BarIcon size={16}/>
                        </ActionIcon>
                        <ActionIcon
                            variant={"light"}
                            size={"md"}
                            radius={"lg"}
                            color={"black"}>
                            <TrashIcon size={16}/>
                        </ActionIcon>
                    </Group>
                </Box>
            </Card.Section>
        </Card>
    );
}