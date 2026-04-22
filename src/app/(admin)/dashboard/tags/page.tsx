import prisma from "@/lib/prisma";

export default async function TagsPage() {

  const tags = await prisma.tag.findMany();

  return (
    <div>
      <h1>Tags</h1>
    </div>
  );
}