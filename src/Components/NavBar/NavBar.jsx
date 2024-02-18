import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, HStack } from "@chakra-ui/react";
const NavBar = () => {
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
    </HStack>
  );
};

export default NavBar;
