import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Box } from "@chakra-ui/react";

// App color Mode = #00a773

function App() {
  return (
    <Box width="75%" margin={"0 auto"} minHeight="100vh" paddingTop={3}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default App;
