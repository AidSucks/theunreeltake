"use client";

import {Box, Button, Title, Stack, Group, Select, TextInput, Table, Badge, Checkbox, ActionIcon, Paper, Pagination} from "@mantine/core";
import {useState} from "react"

export default function DashboardTriviaPage() {
  // Placeholder data
  const data = [
    { question: "What is ___?", category: "Horror", difficulty: "Medium", type: "True/False", status: "Published", correct: "85%" },
    { question: "Which is ___?", category: "Horror", difficulty: "Medium", type: "True/False", status: "Published", correct: "85%" },
    { question: "Who is ___?", category: "Thriller", difficulty: "Extreme", type: "True/False", status: "Published", correct: "20%" },
    { question: "How is ___?", category: "Action", difficulty: "Medium", type: "True/False", status: "Published", correct: "85%" },
    { question: "Where is ___?", category: "Horror", difficulty: "Medium", type: "Multiple Choice", status: "Draft", correct: "85%" },
  ];
  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) => {
   return(
    (!category || item.category === category) &&
    (!type || item.type === type) &&
    (!difficulty || item.difficulty === difficulty) &&
    (!status || item.status === status) &&
    item.question.toLowerCase().includes(search.toLowerCase())
   );
  });
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE);
  const pagedData = filteredData.slice(
   (page - 1) * PAGE_SIZE,
   page * PAGE_SIZE
  );
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const rows = pagedData.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td><Checkbox 
       checked={selectedRows.includes(index)}
       onChange={(e) => {
       if (e.currentTarget.checked) {
         setSelectedRows([...selectedRows, index]);
       } else {
         setSelectedRows(selectedRows.filter((i) => i !== index));
       }}}/>
      </Table.Td>
      <Table.Td>{item.question}</Table.Td>
      <Table.Td>{item.category}</Table.Td>
      <Table.Td>{item.difficulty}</Table.Td>
      <Table.Td>{item.type}</Table.Td>
      <Table.Td>
        <Badge color={item.status === "Published" ? "green" : "red"} variant="light">
          {item.status}
        </Badge>
      </Table.Td>
      <Table.Td>{item.correct}</Table.Td>
      <Table.Td>
        <Group gap="xs">
          <Button size="xs" variant="light">Edit</Button>
          <Button size="xs" variant="light">Publish</Button>
          <Button size="xs" color="red" variant="light">Delete</Button>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box p="lg" style={{ minHeight: "95vh", display: "flex", flexDirection: "column" }}>
      <Stack gap="lg" style={{ flex: 1 }}>
        <Title order={2}>Trivia</Title>
        <Group>
          <Select
            placeholder="Category: All"
            data={['Horror', 'Comedy', 'Action', 'Thriller']}
            value={category}
            onChange={setCategory}
          />
          <Select
           placeholder="Type: All"
           data={['Multiple Choice', 'True/False']}
           value={type}
           onChange={setType}
          />
          <Select
           placeholder="Difficulty: All"
           data={['Easy', 'Medium', 'Hard', 'Extreme']}
           value={difficulty}
           onChange={setDifficulty}
          />
          <Select
           placeholder="Status: All"
           data={['Draft', 'Published']}
           value={status}
           onChange={setStatus}
          />
          <TextInput
           placeholder="Search..."
           value={search}
           onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Button>Add Questions</Button>
        </Group>

        {/* Bulk Actions */}
        <Group>
          <Checkbox label="Select all" 
            checked={pagedData.length > 0 && selectedRows.length === pagedData.length}
            indeterminate={
              selectedRows.length > 0 && selectedRows.length < pagedData.length
            }
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setSelectedRows(pagedData.map((_, index) => index));
              } else {
                setSelectedRows([]);
              }
            }}
          />
          <Group gap="xs">
            <Button variant="subtle" color="red">Delete</Button>
            <Button variant="subtle">Publish</Button>
            <Button variant="subtle">Move</Button>
          </Group>
        </Group>

        {/* Table */}
        <Paper withBorder radius="md" style={{overflowX:"auto"}}>
          <Table highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th></Table.Th>
                <Table.Th>Question</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Difficulty</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>% Correct</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper>
      </Stack>
      <Group mt="md" justify="flex-start" >
        <Pagination
          value={page}
          onChange={setPage}
          total={totalPages}
        />
        <Box>
         {filteredData.length} results
        </Box>
      </Group>
    </Box>
  );  
}