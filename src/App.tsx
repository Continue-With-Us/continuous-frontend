import { Button as MyButton } from "./components/ui/button";
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack>
      <MyButton>Click me</MyButton>
      <Button>Click me</Button>
    </HStack>
  );
}

export default App;
