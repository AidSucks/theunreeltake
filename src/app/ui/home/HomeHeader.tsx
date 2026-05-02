"use client";

import {Box, Center, Flex, Title, Group} from '@mantine/core';
import {HomeBurgerMenu} from "@/app/ui/home/HomeBurgerMenu";
import {WebNavLinks} from "@/app/ui/home/WebNavLinks";
import {HomeHeaderButtons} from "@/app/ui/home/HomeHeaderButtons";
import {AlignCenter, Bootstrap} from "react-bootstrap-icons";
import { SocialMediaLinks } from './SocialMediaLinks';
import { useRouter } from "next/navigation"; 
import { HomeSearchBar } from './HomeSearchBar';
import {useState} from "react";

export function HomeHeader() {
	const router = useRouter();
	const [page, setPage] = useState(1);
	const handleSearch = (value: string) => {router.push(`/catalog?search=${value}`)};
  return (
    <Flex 
        justify='space-between'
        align='center'
        px='md'
        py='md'
        w='100%'
        gap="xl"
        style={{
            backgroundColor: "#7952b3",
            minHeight: 52,
        }}
    >

        <Flex align='center' gap={'8'} style={{ minWidth: 220 }}>
            <Box hiddenFrom="md">
                <HomeBurgerMenu />
            </Box>
            <Bootstrap size={30} color='white' />
            <Title order={2} style={{ whiteSpace: "nowrap", color:"white", fontWeight: 900}}>
                The UnReel Take
            </Title>      
        </Flex>

        <Flex align="center" style={{flex : 1}} gap="xl">

            <Box visibleFrom={"md"} style={{marginLeft: "auto"}}>
                <WebNavLinks/>
            </Box>
			<Box style={{flex : 1}} />
            <Box style={{flex : 1, maxWidth : 220}} >
				<HomeSearchBar 
					onSearchAction={(value) => { handleSearch(value); setPage(1)}}
				/>	
			</Box>
            <Box visibleFrom='xl'>
                <SocialMediaLinks />
            </Box>

            <Box>
                <HomeHeaderButtons/>
            </Box>
        </Flex>
    </Flex>
  );
}