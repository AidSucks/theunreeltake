import prisma from "@/lib/prisma";
import {Button, Group, Paper, Stack} from "@mantine/core";
import TagsTable from "@/app/ui/admin/TagsTable";
import {PlusLg} from "react-bootstrap-icons";

export default async function TagsPage() {

  const tags = await prisma.tag.findMany();

  return (
    <div>
      <h1>Tags</h1>
      <Stack maw={"75%"}>
        <Paper radius={"md"} withBorder>
          <TagsTable data={tags}/>
        </Paper>

        <Group>
          <Button leftSection={<PlusLg/>}>
            New
          </Button>
        </Group>

      </Stack>
    </div>
  );
}