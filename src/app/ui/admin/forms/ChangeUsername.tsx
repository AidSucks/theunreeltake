"use client";

import {Button, TextInput, Text, Stack, Modal, Group, Anchor} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { ChangeUsernameForm, ChangeUsernameSchema } from "@/lib/schemas";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function ChangeUsername() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  
  const [opened, { open, close }] = useDisclosure(false);

  const usernameForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: ""
    },
    validate: zod4Resolver(ChangeUsernameSchema)
  });

  const handleInitialSubmit = (formData: ChangeUsernameForm) => {
    setErrorMessage("");
    setSuccessMessage("");
    open(); 
  };

  const executeUsernameUpdate = async () => {
    setIsUpdating(true);
    setErrorMessage("");
    
    const newUsername = usernameForm.getValues().username;

    const { data, error } = await authClient.updateUser({
      name: newUsername 
    });

    setIsUpdating(false);

    if (error) {
      setErrorMessage(error.message ?? "An Unknown Error Occurred");
      close();
      return;
    }

    setSuccessMessage("Username successfully updated!");
    usernameForm.reset();
    close();
  };

  return (
    <>
      <form onSubmit={usernameForm.onSubmit(handleInitialSubmit)}>
        <Stack gap={8} align="flex-start">
          <TextInput
            pl="lg" w={200} size="sm" radius="lg" label="Username" placeholder="New Username" mb="md"
            {...usernameForm.getInputProps("username")}
          />
          
          <Anchor component="button" type="submit" size="sm" fw={500} mt={4}>
            Change
          </Anchor>
        </Stack>
      </form>

      {errorMessage && (
        <Text c="red" size="sm" mt={4}>
          {errorMessage}
        </Text>
      )}
      
      {successMessage && (
        <Text c="green" size="sm" mt={4}>
          {successMessage}
        </Text>
      )}

      <Modal 
        opened={opened} 
        onClose={close} 
        title="Confirm Username Change" 
        centered 
        radius="md"
      >
        <Text size="sm" mb="xl">
          Are you sure you want to change your username to <strong>{usernameForm.getValues().username}</strong>?
        </Text>
        
        <Group justify="flex-end">
          <Button variant="default" onClick={close} disabled={isUpdating}>
            Cancel
          </Button>
          <Button color="blue" onClick={executeUsernameUpdate} loading={isUpdating}>
            Confirm Change
          </Button>
        </Group>
      </Modal>
    </>
  );
}
