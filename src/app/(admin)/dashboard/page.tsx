import prisma from "@/app/lib/prisma";

export default async function Page() {

  const user = await prisma.user.findFirst();

  return (
    <h1>{`${user?.name} ${user?.role} ${user?.id} ${user?.email}`}</h1>
  );
}