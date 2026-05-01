"use client"

import { Flex, TextInput, ActionIcon, Pagination, Group} from "@mantine/core";
import { Search, Funnel, Filter, ArrowClockwise, PencilSquare, Chat, Trash, BarChart } from "react-bootstrap-icons"
import { PostGrid } from "@/app/ui/admin/AdminPostGrid";
import { NewPostButton } from "@/app/ui/admin/NewPostButton";
import React, { useState, useEffect } from "react";
import { HomeSearchBar } from "@/app/ui/home/HomeSearchBar";
import { getPostAction} from "@/lib/actions";

export default function DashboardPostsPage() {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<CatalogItem[]>([]);
    const [loading, setloading] = useState(true);
    const [total, setTotal] = useState(0);
    const postsPerPage = 10;
    const [search, setSearch] = useState("");
    const handleSearch = (value: string) => {
		setSearch(value);
		setPage(1);
	}

    const icons = {
        Edit: PencilSquare,
        Chat: Chat,
        Stats: BarChart,
        Delete: Trash,
    };
    type CatalogItem = {
        id: string;
        title?: string;
        imageSrc: string;
    };

    const fetchPosts = async (pageValue: number, searchValue: string) => {
        setloading(true);

        const res = await getPostAction({
        page: pageValue,
        limit: postsPerPage,
        search: searchValue,
        });
        if (res.success) {
            setPosts(res.data);
            setTotal(Math.ceil(res.total / postsPerPage));
        } else {
            setPosts([]);
            setTotal(0);
        }
        setloading(false);
    };
    
    useEffect(() => {
        fetchPosts(page, search);
    }, [page, search]);

    return(
        <div style={{ padding: "0 40px" }}>
            <h1>Your Posts</h1>
                <Flex
                    justify={"space-between"}
                    gap={"md"}>
                    <Group>
                    <Flex miw={500}>
					<HomeSearchBar
						onSearchAction={(value: string) => handleSearch(value)}
					/>
				    </Flex>
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
                        variant="light"
                        color="gray"
                        radius="lg"
                        onClick={() => fetchPosts(page, search)}
                    >
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
                    <PostGrid data={posts} icons={icons} />
                </Flex>

                    <Pagination 
                        total={total} 
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