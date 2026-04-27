"use client";

import {Box, Title, Text, Button, Paper,Stack, Group, TextInput, Pagination, ActionIcon} from "@mantine/core"
import {useState, useEffect} from "react"
import { Search, Funnel, Filter, ArrowClockwise} from "react-bootstrap-icons"
import GridReview, {Review} from "./gridReview";  
import Link from "next/link"
import { getMediaRequests, getMediaRequestCount } from "@/lib/actions";

export default function DashboardRequestsPage() {
	const [selectedId, setSelectedId] = useState<string | undefined>();
	const [requests, setRequests] = useState<Review[]>([]);
    const [loading, setLoading] = useState(false);
    const selectedItem = requests.find((item) => item.id === selectedId);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [total, setTotal] = useState(0);
    const limit = 10;
	const fetchRequests = async (pageValue = page, searchValue = search) => {
        setLoading(true);
        try {
            const res = await getMediaRequests({page: pageValue,limit,search: searchValue,}); 
            const count = await getMediaRequestCount(searchValue);
            const formatted: Review[] = res.map((req, i) => ({
            id: req.id,
            title: req.title,
            user: req.name ?? req.email,
            date: "N/A",
            body: req.message ?? "",
        }));
            setRequests(formatted);
            setTotal(Math.ceil(count / limit));
        } catch (err) {
            console.error("Failed to fetch requests", err);
        } finally {
            setLoading(false);
        }
    };
    const searchHandler = (value: string) =>{
        setSearch(value);
        setPage(1);
    }
    const handlePage = (newPage : number) => {
        setPage(newPage);
        fetchRequests(newPage, search);
    }
    useEffect(() => {
            fetchRequests(page, search);
    }, [page, search]);
	
	return(
		<Box p="lg">
			<Title order={2} mb="md">
					Requests
			</Title>
			<Paper withBorder radius="md" p="lg" mb="lg">
				{selectedItem ? (
				<Stack>
					<Title order={4}>{"Selected: " + selectedItem.title}</Title>
					<Text size="sm" c="dimmed">
						{selectedItem.body}
					</Text>
					<Group>
					<Button size="xs" variant="light" component= {Link} href={"/dashboard/posts/create"}>
						Create Post
					</Button>
					<Button size="xs" variant="light">
						Reply To User
					</Button>
					<Button size="xs" variant="light" color="red">
						Delete Request
					</Button>
					</Group>
				</Stack>
				) : (
				<Text c="dimmed"> Select a card to view details </Text>
				)}
			</Paper>

			<Group mb="md">
				<TextInput
					w={400} 
					size={"xs"}  
					radius={"md"} 
					placeholder={"Search"}
					rightSection={<Search size={16}/>}
                    value={search}
                    onChange={(e) => searchHandler(e.currentTarget.value)}
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
					aria-label={"Refresh Button"}
					onClick={() => fetchRequests()}>
					<ArrowClockwise size={16}/>
				</ActionIcon>
			</Group>
		
			<GridReview
					data={requests}
					selectedId={selectedId}
					onSelect={(id) => setSelectedId(id)}
			/>
			
			<Group mt="xl">
					<Pagination total={total} value={page} onChange={handlePage} />
			</Group>
		</Box>
	)

    
}
