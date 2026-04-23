"use client"

import { Flex, TextInput, ActionIcon, Pagination, Group} from "@mantine/core";
import { Search, Funnel, Filter, ArrowClockwise, PencilSquare, Chat, Trash, BarChart } from "react-bootstrap-icons"
import { PostGrid } from "../../../ui/admin/AdminPostGrid";
import { NewPostButton } from "@/app/ui/admin/NewPostButton";
import React, { useState } from "react";

export default function DashboardPostsPage() {
    const [page, setPage] = useState(1)
    // Placeholder posts data
    // Testing Pagination as well 10 per page
    const [posts, setPosts] = useState([
    {
        id: "1",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "2",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "3",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "4",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "5",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "6",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "7",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "8",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "9",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "10",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "11",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    {
        id: "12",
        imageSrc: "https://placehold.co/600x800?text=Placeholder",
    },
    ]);

    const nextPage = () => setPage(prev => prev + 1)
    const prevPage = () => setPage(prev => prev - 1)
    const postsPerPage = 10;
    const totalPages = Math.ceil(posts.length / postsPerPage)
    const paginatedPosts = posts.slice(
        (page - 1) * postsPerPage, page * postsPerPage
    );

    const icons = {
        Edit: PencilSquare,
        Chat: Chat,
        Stats: BarChart,
        Delete: Trash,
    };

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
                        rightSection={<Search size={ 16 }/>}
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
                    <PostGrid data={paginatedPosts} icons={icons} />
                </Flex>

                    <Pagination 
                        total={totalPages} 
                        siblings={1} 
                        value={page}
                        onChange={setPage}
                        color={"gray"}
                        style={{
                            marginTop: 32,
                            bottom: 20,
                            left: 300
                        }}/>
        </div>
    );
}