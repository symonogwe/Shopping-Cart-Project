import { extendTheme } from "@chakra-ui/react";

// config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// extend theme
const theme = extendTheme({ config });

export default theme;
