import reviews from "@/../public/review.json";
import EditPostForm from "@/app/ui/admin/forms/EditPostForm";
import { redirect } from 'next/navigation';

export default async function EditPostPage({
    params
  }: {
    params: Promise<{ id: string }>
  }) {

  const { id } = await params;
    
  const fullReviewData = reviews.find((entry) => entry.id === id);

  return <EditPostForm fullReviewData={fullReviewData}/>
  
}