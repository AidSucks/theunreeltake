'use client';

import {Flex, Group, Loader} from "@mantine/core";
import {HomeSearchBar} from "@/app/ui/home/HomeSearchBar";
import PostGrid from "@/app/ui/home/PostGrid";
import CatalogActionButtons from "@/app/ui/home/CatalogActionButtons";
import {useCallback, useEffect, useState, useTransition} from "react";
import {getPostData, PostData} from "@/app/lib/actions";
import {useSearchParams} from "next/navigation";
import RefreshDataButton from "@/app/ui/home/RefreshDataButton";

export default function MoviesPage(){

  const [posts, setPosts] = useState(new Array<PostData>(0));
  const searchParams = useSearchParams();
  const [isLoading, startTransition] = useTransition();

  const refresh = useCallback(() => {
    startTransition(async () => {

      const postData = await getPostData(searchParams.toString());

      setPosts(postData);
    });
  }, [searchParams]);

  useEffect(() => refresh(), [refresh]);

  return (
    <>
      <Group gap={"xs"}>
        <Flex w={{base: "100%", sm: "80%", md: "40%"}}>
          <HomeSearchBar/>
        </Flex>
        <CatalogActionButtons/>
        <RefreshDataButton updateData={refresh}/>
      </Group>

      {isLoading ? <CatalogLoader/> : <PostGrid posts={posts}/>}
    </>
  );
}

function CatalogLoader() {
  return (
    <Flex h={"100%"} align={"center"} justify={"center"}>
      <div>
        <Loader type={"oval"}/>
      </div>
    </Flex>
  );
}