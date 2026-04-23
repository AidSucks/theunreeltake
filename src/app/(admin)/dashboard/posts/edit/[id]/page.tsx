import { PostForm } from "@/app/ui/admin/forms/PostForm";
import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";

export default async function EditPostPage({
    params
  }: {
    params: Promise<{ id: string }>
  }) {

  const { id } = await params;

  const data = await prisma.post.findUnique({ where: { id: id }, include: { tags: { include: { tag: true }, omit: { postId: true, tagId: true }} }});

  if (!data) redirect("/dashboard/posts") 

  const post = {
    id: data.id,
    title: data.title,
    slug: data.slug,
    htmlContent: data.htmlContent,
    published: data.published,
    mediaType: data.tags[0].tag.displayName
  }

  return (
    <div>
      <PostForm post={post}/>
    </div>
  )
}