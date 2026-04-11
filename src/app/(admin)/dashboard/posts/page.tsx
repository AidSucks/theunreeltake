"use client"

import { Button, Flex, TextInput, ActionIcon, Pagination, Grid, Group} from "@mantine/core";
import { Search, Funnel, Filter, ArrowClockwise, PencilSquare, Chat, Trash, BarChart } from "react-bootstrap-icons"
import { GridPostCard } from "./gridPost";
import { NewPostButton } from "@/app/ui/admin/NewPostButton";

export default function DashboardPostsPage() {
    return(
        <div style={{ padding: "0 40px" }}>
            <h1>Your Posts</h1>
                <Flex
                    justify={"space-between"}
                    gap={"md"}>
                    <Group>
                    <TextInput 
                        w={400} 
                        size={"xs"}  
                        radius={"md"} 
                        placeholder={"Search"}
                        rightSection={<Search size={16}/>}
                    ></TextInput>
                    <ActionIcon 
                        variant={"light"}
                        color={"gray"}
                        radius={"lg"}
                        aria-label={"Filter Button"}>
                        <Funnel size={16}/>
                    </ActionIcon>
                    <ActionIcon
                        variant={"light"}
                        color={"gray"}
                        radius={"lg"}
                        aria-label={"Sort Button"}>
                        <Filter size={16}/>
                    </ActionIcon>
                    <ActionIcon
                        variant={"light"}
                        color={"gray"}
                        radius={"lg"}
                        aria-label={"Refresh Button"}>
                        <ArrowClockwise size={16}/>
                    </ActionIcon>
                    </Group>
                    <Group
                        justify={"flex-end"}>
                        <NewPostButton/>
                    </Group>
                </Flex>

                <Flex
                    style={{ marginTop: '32px' }}>
                    <Grid>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                        <Grid.Col
                            span={{ base: 12, md: 6, lg: 3 }}
                            >
                            <GridPostCard 
                                imageSrc="https://placehold.co/600x800?text=Placeholder"
                                icon_1={PencilSquare} 
                                icon_2={Chat}
                                icon_3={BarChart}
                                icon_4={Trash} />
                        </Grid.Col>
                    </Grid>
                    
                </Flex>
                    <Pagination 
                        total={15} 
                        siblings={1} 
                        defaultValue={1} 
                        color={"gray"}
                        style={{
                            marginTop: 32,
                            bottom: 20,
                            left: 300
                        }}/>
        </div>
    );
}