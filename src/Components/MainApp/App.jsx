import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box width="75%" margin={"0 auto"} minHeight="100vh">
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default App;
