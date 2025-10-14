'use client';

import {Grid} from "@mantine/core";
import {PostData} from "@/app/lib/actions";
import {ReactElement, useEffect, useState} from "react";
import {MoviePostCard} from "@/app/ui/home/MoviePostCard";

export default function PostGrid(
  { 
    posts
  }: {
    posts: PostData[],
  }
) {

  const [renderedPosts, setRenderedPosts] = useState(new Array<ReactElement>(0));
  
  function mapToPostcard(data: PostData, index: number) {
    return (
      <Grid.Col key={index} span={{base: 12, sm: 6, md: 4, lg: 3, xl: 2}}>
        <MoviePostCard postData={data}/>
      </Grid.Col>
    );
  }

  useEffect(() => setRenderedPosts(posts.map(mapToPostcard)), [posts]);

  return (
    <Grid
      columns={12}
      gutter={"lg"}
      p={16}
      type={"container"}
      breakpoints={{ xs: '320px', sm: '425px', md: '650px', lg: '900px', xl: '1300px' }}>
        {renderedPosts}
    </Grid>
  );

}
