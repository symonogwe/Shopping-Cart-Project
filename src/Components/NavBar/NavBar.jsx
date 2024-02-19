import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Link as ChakraLink,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent={"space-evenly"}
      borderRadius={9}
      width="70%"
      margin={"0 auto"}
    >
      <ChakraLink
        color={"black"}
        textDecoration={"none"}
        as={ReactRouterLink}
        to="home"
      >
        Home
      </ChakraLink>
      <ChakraLink
        textDecoration={"none"}
        color={"black"}
        as={ReactRouterLink}
        to="store"
      >
        Store
      </ChakraLink>
      <ChakraLink
        textDecoration={"none"}
        color={"black"}
        as={ReactRouterLink}
        to="cart"
      >
        Cart
      </ChakraLink>
      <Box display="flex" gap={4} whiteSpace={"nowrap"}>
        <Switch onChange={() => toggleColorMode()} colorScheme={"teal"} />
        <Text>{colorMode} mode</Text>
      </Box>
    </HStack>
  );
};

export default NavBar;
