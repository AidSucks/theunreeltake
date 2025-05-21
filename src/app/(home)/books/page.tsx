'use client'

import {Grid} from "@mantine/core";
import {MoviePostCard} from "@/app/ui/home/MoviePostCard";

export default function BooksPage() {

  let items = new Array(18).fill(0);

  items = items.map((item, index) => {
    return (
      <Grid.Col key={index} span={{base: 12, sm: 6, md: 4, lg: 3, xl: 2}}><div><MoviePostCard/></div></Grid.Col>
    );
  });

  return (
    <Grid
      columns={12}
      gutter={"lg"}
      p={16}
      type={"container"}
      breakpoints={{ xs: '320px', sm: '425px', md: '650px', lg: '900px', xl: '1300px' }}>
      {items}
    </Grid>
  );
}