import { Blockquote } from "@/components/ui/blockquote";
import {
  BlockquoteIcon,
  Card,
  Flex,
  Float,
  Heading,
  Stack,
} from "@chakra-ui/react";

const CoursePage = () => {
  return (
    <Flex w={"100vw"} h={"100vh"} p={"32px"}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Blockquote
          variant="plain"
          colorPalette="teal"
          showDash
          icon={
            <Float placement={"top-start"} offsetY={"2"}>
              <BlockquoteIcon />
            </Float>
          }
        >
          이 서비스는 소프트웨어 어쩌구 저쩌구 서비스입니다.
        </Blockquote>
      </Flex>
      <Flex direction={"column"} justifyContent={"center"} gap={"24px"}>
        <Flex direction={"column"} gap={"12px"}>
          <Heading>자바스크립트</Heading>
          <Stack direction={"row"}>
            <Card.Root size={"md"}>
              <Card.Body>closure</Card.Body>
            </Card.Root>
            <Card.Root size={"md"}>
              <Card.Body>closure</Card.Body>
            </Card.Root>
          </Stack>
        </Flex>
        <Flex direction={"column"} gap={"12px"}>
          <Heading>자바</Heading>
          <Stack direction={"row"}>
            <Card.Root size={"md"}>
              <Card.Body>closure</Card.Body>
            </Card.Root>
            <Card.Root size={"md"}>
              <Card.Body>closure</Card.Body>
            </Card.Root>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CoursePage;
