import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Box, Center, useColorMode } from "@chakra-ui/react";

// App color Mode = #00a773

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width="75%" margin={"0 auto"} minHeight="100vh" paddingTop={3}>
      <NavBar colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Center minHeight={"90vh"}>
        <Outlet context={colorMode} />
      </Center>
    </Box>
  );
}

export default App;
