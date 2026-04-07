
import films from "@/../public/film.json";
import { Title, Grid, GridCol,Image,Text } from "@mantine/core";

export default async function BlogPostPage(
  {
    params
  }: {
    params: Promise<{ slug: string }>
  }
) {

  const { slug } = await params;

  const fullPostData = films.find((entry) => entry.slug === slug);

  if(!fullPostData) return <h1>Not Found</h1>;

  return (


    <div>
      <Title ta="center" order={1}>{fullPostData["Title"]}</Title>
      <Text ta= "center" size="sm">{fullPostData["Released"]} • {fullPostData["Rated"]} • {fullPostData["Runtime"]} • {fullPostData["Genre"]} • {fullPostData["Director"]} • {fullPostData["Country"]} • {fullPostData["Language"]}</Text>

      <Grid justify="center" align="flex-start">
      <GridCol span={2}><Image
      radius="md"
      
      src={fullPostData.Images[0]}
      />
      </GridCol>
      <GridCol span={2}><Image
      radius="md"
      
      src={fullPostData.Images[1]}
      />
      </GridCol>
      <GridCol span={2}><Image
      radius="md"
      
      src={fullPostData.Images[2]}
      />
      </GridCol>
      </Grid>
      {Object.entries(fullPostData).map((value, index) => {
        return <ul key={index}>{value[0].toString()} : {value[1].toString()}</ul>
      })}
    </div>
  );
}