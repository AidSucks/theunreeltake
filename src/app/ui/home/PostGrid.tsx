'use client';

import {Grid} from "@mantine/core";
import {PostData} from "@/app/lib/actions";
import {MoviePostCard} from "@/app/ui/home/MoviePostCard";

export default function PostGrid(
  { 
    posts
  }: {
    posts: PostData[],
  }
) {

  function mapToPostcard(data: PostData, index: number) {
    return (
      <Grid.Col key={index} span={{base: 6, sm: 4, md: 3, lg: 3, xl: 2}}>
        <MoviePostCard postData={data}/>
      </Grid.Col>
    );
  }

  const renderedPosts = posts.map(mapToPostcard);

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
