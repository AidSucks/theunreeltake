
import films from "@/../public/film.json";

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
      {Object.entries(fullPostData).map((value, index) => {
        return <ul key={index}>{value[0].toString()} : {value[1].toString()}</ul>
      })}
    </div>
  );
}