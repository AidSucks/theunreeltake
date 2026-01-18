"use client";

import {useContext, useState, useTransition} from "react";
import {AuthContext} from "@/app/ui/admin/AuthContext";
import {Box, Button, Group, Stack, Text, TextInput, Title} from "@mantine/core";
import {authClient} from "@/lib/auth-client";
import {CreateUser} from "@/app/ui/admin/forms/CreateUser";

export default function DashboardUsersPage() {

  const authContext = useContext(AuthContext);

  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => startTransition(async () => {

    const { error } = await authClient.signIn.magicLink({
      email: email,
      name: name,
      callbackURL: "/dashboard",
      newUserCallbackURL: "/dashboard/change-password",
      errorCallbackURL: "/"
    });

    if(error)
      setErrorMessage(error.message ?? "An Unknown Error Occurred");
    else
      setSuccess(true);

  });

  if(authContext.user.role !== "admin") return (
    <h1>
      Unauthorized
    </h1>
  );

  if(success) return (
    <Text size={"xl"}>Invitation Sent!</Text>
  );


  return (
    <Group>
      <Box maw={300} p={"lg"}>

        <Title order={3} mb={"sm"}>Send a Magic Link</Title>

        {errorMessage ? <Text c={"red"}>{errorMessage}</Text> : null }

          <Stack gap={"xs"}>
            <TextInput
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              description={"The email of the user to invite"}
              placeholder={"johndoe@email.com"}
              label={"Email"}
            />

            <TextInput
              value={name}
              onChange={(event) => setName(event.currentTarget.value)}
              description={"The name of the user"}
              placeholder={"Name"}
              label={"Display Name"}
            />

            <Group justify={"center"}>
              <Button
                onClick={handleSubmit} w={"50%"} loading={isPending}
              >
                Send
              </Button>
            </Group>
          </Stack>

      </Box>

      <CreateUser/>
    </Group>
  );
}