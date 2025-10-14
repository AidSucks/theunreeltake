import {Box, Flex, Text} from "@mantine/core";
import {RequestForm} from "@/app/ui/home/forms/RequestForm";

export default function RequestsPage() {

  return (
    <Flex w={"100%"} h={"100%"} justify={"center"} direction={"column"} align={"center"}>
      <Box w={{base: "100%", lg: "75%"}} px={"md"}>
        <Text my={"xl"}>
          Didn’t find the UnReel Take you were looking for? Request a movie for our review!
          Since we all have day jobs, we are entering in movies as we watch them. If there
          is a movie you are looking for that we haven’t reviewed, just request it and we
          will watch it as soon as we can. Once it is ready, we will personally let you know.
          Leaving your name is optional, but please insert your email address so we know how
          to notify you. None of the information you submit below is stored any longer than
          necessary. Once we post your requested review, all submitted information is deleted.
        </Text>
        <RequestForm/>
      </Box>
    </Flex>
  );
}