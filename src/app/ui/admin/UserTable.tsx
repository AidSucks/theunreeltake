"use client"

import { Box, Button, Stack, Table, Pagination, Badge, Group, Paper, Avatar , Modal, Text, Flex} from "@mantine/core";
import { getAllUsers, deleteUser } from "@/lib/actions";
import {useState, useEffect, useContext} from "react"
import {AuthContext} from "@/app/ui/admin/AuthContext";


export function UserTable() {
    type User = Awaited<ReturnType<typeof getAllUsers>>
    const [users, setUsers] = useState<NonNullable<User>>([]);
    const [loading, setLoading] = useState(true);
    const data = useContext(AuthContext);
    const userID = data?.user.id;
    useEffect(() => {
        async function fetchUsers() {
        const data = await getAllUsers(userID);
        if (!data) {
            console.log("Database error");
            setUsers([]); //Add error message popup
        } else {
            setUsers(data);
        }
        setLoading(false);
        }
        fetchUsers();
    }, []);
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 10;
    const totalPages = Math.ceil(users.length / PAGE_SIZE);
    const pagedData = users.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    ); 
    const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
    const [modalOpened, setModalOpened] = useState(false);
    const rows = pagedData.map((user) => (
        <Table.Tr key={user.id}>
            <Table.Td><Avatar 
              src={user.image} alt={user.name} radius="xl">
              {user.name?.split(" ").slice(0, 2).map(x => x[0])}
            </Avatar></Table.Td>
            <Table.Td>{user.name}</Table.Td>
            <Table.Td>{user.email}</Table.Td>
            <Table.Td>
            <Badge color={user.role === "admin" ? "green" : "red"} variant="light" style={{marginright:20}}>
              {user.role}
            </Badge>
            </Table.Td>
            <Table.Td>
            <Group gap="xs">
                <Button size="sm" variant="light">Edit</Button>
                <Button size="sm" variant="light">Message</Button>
                <Button 
                  size="sm" 
                  color="red" 
                  variant="light" 
                  onClick={() => {
                    setDeleteUserId(user.id)
                    setModalOpened(true);
                }}
                >
                  Delete
                </Button>
                <Modal
                    opened={modalOpened}
                    onClose={() => setModalOpened(false)}
                    title="Confirm Deletion"
                    >
                    <Text>Are you sure you want to delete this user?</Text>
                    <Group mt="md">
                        <Button variant="default" onClick={() => setModalOpened(false)}>
                        Cancel
                        </Button>
                        <Button
                        color="red"
                        onClick={() => {
                            if (deleteUserId) deleteUser(deleteUserId);
                            setModalOpened(false);
                        }}
                        >
                        Confirm
                        </Button>
                    </Group>
                </Modal>
            </Group>
            </Table.Td>
        </Table.Tr>
        ));
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <Box p="lg">
          <Stack style={{flex:1}} gap="md">
            <Paper withBorder radius="md" shadow = "md" style={{overflowX:"auto"}}>
                      <Table striped highlightOnHover verticalSpacing = "md" horizontalSpacing="lg" style={{ whiteSpace: "nowrap" }}>
                        <Table.Thead style={{backgroundColor: "#3673C9"}}>
                          <Table.Tr>
                            <Table.Th></Table.Th>
                            <Table.Th>Username</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Role</Table.Th>
                            <Table.Th></Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                      </Table>
            </Paper>
          </Stack>
          <Group mt="lg" justify="space-between" >
            <Pagination
                value={page}
                onChange={setPage}
                total={totalPages}
            />
            <Box>
                {pagedData.length} Users
            </Box>
          </Group>
        </Box>
      );
}