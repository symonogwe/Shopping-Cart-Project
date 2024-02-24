import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { array, func, string } from "prop-types";

const NavBar = ({ colorMode, toggleColorMode, cart }) => {
  return (
    <HStack
      justifyContent={"space-evenly"}
      borderRadius={9}
      width="70%"
      margin={"0 auto"}
      data-testid={"navbar"}
    >
      <NavLink path="home" />
      <NavLink path="store" />
      <NavLink path="cart" cart={cart} />
      <Box display="flex" gap={4} whiteSpace={"nowrap"}>
        <Switch
          onChange={() => toggleColorMode()}
          colorScheme={"teal"}
          data-testid="theme-toggle"
        />
        <Text
          className={colorMode === "dark" ? "nav-link" : "nav-link-light"}
          fontSize={{
            base: "sm",
            md: "md",
            xl: "lg",
          }}
          role="toggle-paragraph"
        >
          {colorMode} mode
        </Text>
      </Box>
    </HStack>
  );
};

NavBar.propTypes = {
  colorMode: string,
  toggleColorMode: func,
  cart: array,
};

export default NavBar;
