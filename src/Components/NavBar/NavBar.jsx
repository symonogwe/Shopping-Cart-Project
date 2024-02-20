import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import NavLink from "./NavLink";
import { func, string } from "prop-types";

const NavBar = ({ colorMode, toggleColorMode }) => {
  return (
    <HStack
      justifyContent={"space-evenly"}
      borderRadius={9}
      width="70%"
      margin={"0 auto"}
    >
      <NavLink path="home" />
      <NavLink path="store" />
      <NavLink path="cart" />
      <Box display="flex" gap={4} whiteSpace={"nowrap"}>
        <Switch onChange={() => toggleColorMode()} colorScheme={"teal"} />
        <Text
          className={colorMode === "dark" ? "nav-link" : "nav-link-light"}
          fontSize={{
            base: "sm",
            md: "md",
            xl: "lg",
          }}
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
};

export default NavBar;
