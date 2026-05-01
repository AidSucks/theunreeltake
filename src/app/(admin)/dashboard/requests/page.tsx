"use client";

import {Box, Title, Text, Button, Paper, Stack, Group, Pagination, ActionIcon, Flex} from "@mantine/core"
import {useState, useEffect, useTransition, useCallback} from "react"
import { Funnel, Filter, ArrowClockwise } from "react-bootstrap-icons"
import GridReview from "./gridReview";
import Link from "next/link"
import { getMediaRequests } from "@/lib/actions";
import {HomeSearchBar} from "@/app/ui/home/HomeSearchBar";
import {Request} from "@/generated/prisma/client";
const limit = 10;

export default function DashboardRequestsPage() {

	const [selectedId, setSelectedId] = useState<string | undefined>();
	const [requests, setRequests] = useState<Request[]>([]);
	const selectedItem = requests.find((item) => item.id === selectedId);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [total, setTotal] = useState(0);

	const [isLoading, startTransition] = useTransition();

	const handleSearch = (value: string) => {
		setSearch(value);
		setPage(1);
	}

	const handlePage = (newPage: number) => setPage(newPage);

	const refresh = useCallback(() => {
		startTransition(async () => {

			try {

				const res: Request[] = await getMediaRequests({page, limit, search});
				const count = res.length;

				setRequests(res);
				setTotal(Math.ceil(count / limit));

			} catch (error) {
				console.log("Failed to fetch requests", error);
			}
		})
	}, [page, search]);

	useEffect(() => {
		refresh();
	}, [refresh]);
	
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
						{selectedItem.message}
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
				<Flex miw={500}>
					<HomeSearchBar
						onSearchAction={(value: string) => handleSearch(value)}
					/>
				</Flex>

				<ActionIcon
					size={"lg"}
					variant={"light"}
					color={"gray"}
					aria-label={"Filter Button"}>
					<Funnel size={24}/>
				</ActionIcon>
				<ActionIcon
					size={"lg"}
					variant={"light"}
					color={"gray"}
					aria-label={"Sort Button"}>
					<Filter size={24}/>
				</ActionIcon>
				<ActionIcon
					size={"lg"}
					variant={"light"}
					color={"gray"}
					aria-label={"Refresh Button"}
					onClick={refresh}
				>
					<ArrowClockwise size={24}/>
				</ActionIcon>
			</Group>

			{!isLoading ?
				<>
					<GridReview
						data={requests}
						selectedId={selectedId}
						onSelectAction={(id) => setSelectedId(id)}
					/>
					<Group mt="xl">
						<Pagination total={total} value={page} onChange={handlePage}/>
					</Group>
				</>
				: null
			}

		</Box>
	)

    
}
