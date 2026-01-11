'use client';

import {Grid} from "@mantine/core";
import {CatalogItem} from "@/app/lib/schemas";
import {MoviePostCard} from "@/app/ui/home/MoviePostCard";

export default function PostGrid(
  { 
    posts
  }: {
    posts: CatalogItem[],
  }
) {

  function mapToPostcard(data: CatalogItem, index: number) {
    return (
      <Grid.Col key={index} span={{base: 12, xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}>
        <MoviePostCard postData={data}/>
      </Grid.Col>
    );
  }

  const renderedPosts = posts.map(mapToPostcard);

  return (
    <Grid
      columns={12}
      gutter={"xl"}
      p={{ base: "lg", md: "xl"}}
      type={"container"}
      breakpoints={{ xs: '320px', sm: '450px', md: '650px', lg: '900px', xl: '1300px' }}>
        {renderedPosts}
    </Grid>
  );

}
