import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { string } from "prop-types";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const colorMode = useOutletContext();
  return (
    <VStack
      maxW={"70%"}
      alignItems={"center"}
      py={95}
      borderRadius={10}
      bgColor={"#00a773"}
    >
      <Heading size={"2xl"} textAlign={"center"} mb={3}>
        Welcome to this virtual store
      </Heading>
      <Text textAlign={"center"} mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        dolorem. Ea sequi, enim itaque temporibus fugit impedit pariatur numquam
        quae dolorem deleniti molestias commodi velit!
      </Text>
      <Button
        bg={colorMode === "dark" ? "gray.900" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
      >
        Shop Now
      </Button>
    </VStack>
  );
};

HomePage.proTypes = {
  colorMode: string,
};

export default HomePage;
