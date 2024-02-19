import { Box, HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import NavLink from "./NavLink";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
        <Text className={colorMode === "dark" ? "nav-link" : "nav-link-light"}>
          {colorMode} mode
        </Text>
      </Box>
    </HStack>
  );
};

export default NavBar;
