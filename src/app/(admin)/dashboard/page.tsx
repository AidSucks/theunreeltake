import prisma from "@/app/lib/prisma";
import Stack from "react-bootstrap/Stack";

export default async function Page() {

  const user = await prisma.user.findFirst();

  return (
    <Stack direction={"vertical"} gap={3}>
      <h3>{user?.id}</h3>
      <h3>{user?.name}</h3>
      <h3>{user?.email}</h3>
    </Stack>
  );
}