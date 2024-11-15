import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const AnswerListPage = () => {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      gap={"40px"}
      backgroundColor={"background"}
      p={"40px"}
    >
      <Flex
        grow={1}
        backgroundColor={"background"}
        borderRadius={"sm"}
        shadow="lg"
        p={"90px"}
        direction={"column"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Heading size={"2xl"}>Closure가 무엇인가요?</Heading>

        <Card.Root size={"sm"} w={"600px"}>
          <Card.Body>
            testesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestt
          </Card.Body>
        </Card.Root>
        <Box>
          축하드립니다. 자신만의 Closure 개념을 완성했어요. 다른 사람들은 아래와
          같이 답변했어요.
        </Box>
        <Stack w={"600px"} overflow={"auto"}>
          <Card.Root size={"sm"}>
            <Card.Body>
              testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttes
              tt estt est test test
            </Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
          <Card.Root size={"sm"}>
            <Card.Body>test</Card.Body>
          </Card.Root>
        </Stack>
      </Flex>

      <Flex
        shadow={"lg"}
        pt={"90px"}
        pb={"32px"}
        px={"32px"}
        backgroundColor={"background"}
        borderRadius={"sm"}
        direction={"column"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"} gap={"20px"}>
          <Flex gap={"4px"}>
            <Box>나의 답변 모아보기</Box>
            <Badge>Coming Soon</Badge>
          </Flex>
          <Separator />
          <Box>다시 작성하러가기</Box>
          <Separator />
          <Box>다른 문제 풀러가기</Box>
          <Separator />
          <Box>개발자에게 피드백하러가기</Box>
          <Separator />
          <Box>공유하기</Box>
          <Separator />
        </Flex>

        <Flex justifyContent={"center"} alignItems={"center"} gap={"8px"}>
          <BsArrowLeftSquareFill />
          홈으로 가기
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AnswerListPage;
