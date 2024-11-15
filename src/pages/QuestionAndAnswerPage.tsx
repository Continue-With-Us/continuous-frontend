import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  Textarea,
} from "@chakra-ui/react";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const QuestionAndAnswerPage = () => {
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
        <Flex direction={"column"} alignItems={"center"} gap={"8px"}>
          <Button size={"xs"}>키워드보기 (2/5)</Button>
          <Flex gap={"8px"}>
            <Badge size={"lg"}>Lexical Environment</Badge>
            <Badge size={"lg"}>Outer Reference</Badge>
          </Flex>
        </Flex>
        <Textarea
          placeholder={"답변을 입력해주세요"}
          shadow={"lg"}
          h={"full"}
          resize={"none"}
        />
        <Flex gap={"12px"} justifyContent={"center"}>
          <Button size={"xl"} minWidth={"200px"}>
            제출
          </Button>
          <Button size={"xl"} minWidth={"200px"} variant={"surface"}>
            감잡기
          </Button>
        </Flex>
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
          <Box>다른 문제 풀러가기</Box>
          <Separator />
          <Box>개발자에게 피드백하러가기</Box>
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

export default QuestionAndAnswerPage;
