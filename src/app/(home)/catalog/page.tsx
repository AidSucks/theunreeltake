'use client';

import {Flex, Group, Loader} from "@mantine/core";
import {HomeSearchBar} from "@/app/ui/home/HomeSearchBar";
import PostGrid from "@/app/ui/home/PostGrid";
import CatalogActionButtons from "@/app/ui/home/CatalogActionButtons";
import {Suspense, use, useCallback, useEffect, useState, useTransition} from "react";
import {CatalogParams, getPostData, PostData} from "@/app/lib/actions";
import RefreshDataButton from "@/app/ui/home/RefreshDataButton";

export default function MoviesPage(
  {
    searchParams
  }: {
    searchParams: Promise<{ [_: string]: string | string[] | undefined }>
  }
){

  const [posts, setPosts] = useState(new Array<PostData>(0));
  const params = use(searchParams);
  const [isLoading, startTransition] = useTransition();

  const refresh = useCallback(() => {
    startTransition(async () => {

      const {search, sort} = params;

      const paramData: CatalogParams = {};

      if(Array.isArray(search))
        paramData.search = search[0];
      else
        paramData.search = search;

      if(Array.isArray(sort))
        paramData.sort = sort[0];
      else
        paramData.sort = sort;

      const postData = await getPostData(paramData);

      setPosts(postData);
    });
  }, [params]);

  useEffect(() => refresh(), [refresh]);

  return (
    <>
      <Group gap={"xs"}>
        <Flex w={{base: "100%", sm: "80%", md: "40%"}}>
          <Suspense>
            <HomeSearchBar/>
          </Suspense>
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