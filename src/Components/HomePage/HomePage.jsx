import { Box, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { string } from "prop-types";
import { useOutletContext } from "react-router-dom";

import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

// images
import pic from "/home/user/React/projects/shopping-cart-project/src/assets/homepage-pic.jpg";

const HomePage = () => {
  const [colorMode] = useOutletContext();

  return (
    <VStack
      w={"100%"}
      alignItems={"center"}
      py={45}
      borderRadius={10}
      bgColor={"#00a773"}
    >
      <Heading size={"2xl"} textAlign={"center"} mb={3}>
        Welcome to this virtual store
      </Heading>
      <Text
        textAlign={"center"}
        mb={3}
        className="hero-text"
        maxWidth={"60ch"}
        fontSize={{
          base: "lg",
          md: "xl",
          xl: "2xl",
        }}
      >
        Welcome to My Store! Immerse yourself in a world of limitless
        possibilities. Explore our curated collection of imaginary goods, from
        futuristic gadgets to fantasy fashion. Step into a realm where
        imagination meets convenience and let the adventure begin!
      </Text>
      <Box
        width={{
          base: "90%",
          md: "70%",
          xl: "50%",
        }}
        border={"2px solid white"}
        borderRadius={10}
        mb={8}
      >
        <Image src={pic} objectFit={"cover"} borderRadius={9} />
      </Box>
      <Button
        bg={colorMode === "dark" ? "gray.900" : "white"}
        color={colorMode === "dark" ? "white" : "black"}
      >
        <ChakraLink as={ReactRouterLink} to="/store">
          Shop Now
        </ChakraLink>
      </Button>
    </VStack>
  );
};

HomePage.proTypes = {
  colorMode: string,
};

export default HomePage;
