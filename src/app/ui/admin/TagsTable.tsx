"use client";

import {Tag} from "@/generated/prisma/client";
import {ActionIcon, Button, Group, Modal, Table, TableData, Title, Text, Stack} from "@mantine/core";
import {Trash} from "react-bootstrap-icons";
import {deleteTag} from "@/lib/actions";
import {useDisclosure} from "@mantine/hooks";
import {useState} from "react";

export default function TagsTable(
  { data }: { data: Tag[] }
) {

  const [opened, { open, close }] = useDisclosure();
  const [selectedTagId, setSelectedTagId] = useState(0);

  const handleDelete = async (id: number) => {

    const {error, success} = await deleteTag(id);

    if(!success) {
      console.log(error);
    }
  }

  const tableData: TableData = {
    head: ["ID", "Name", "Type", "Actions"],
    body: data.map((tag) => {

      const actionButtons = (
        <Group>
          <ActionIcon color={"red.8"} onClick={() => { open(); setSelectedTagId(tag.id) }}>
            <Trash/>
          </ActionIcon>
        </Group>
      );

      return [tag.id.toString(), tag.displayName, tag.type, actionButtons];
    })
  }

  return (
    <>
      <Modal
        title={
          <Stack gap={0}>
            <Title order={4}>Are you sure you want to delete this tag?</Title>
            <Text size={"sm"}>This action cannot be undone.</Text>
          </Stack>
        }
        opened={opened}
        onClose={close}
      >

        <Group justify="center">
          <Button color="red" onClick={async () => {
            close();
            await handleDelete(selectedTagId);
          }}>
            Yes, Delete
          </Button>

          <Button variant="default" onClick={close}>
            No, Keep
          </Button>
        </Group>
      </Modal>

      <Table
        data={tableData}
        withRowBorders
        highlightOnHover
      />
    </>
  );
}