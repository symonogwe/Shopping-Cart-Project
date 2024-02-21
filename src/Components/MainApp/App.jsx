import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Box, Center, useColorMode } from "@chakra-ui/react";
import { createContext, useState } from "react";

// App color Mode = #00a773

export const CartContext = createContext();

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [cart, setCartItems] = useState([]);

  function updateCart(count) {
    setCartItems([...cart, count]);
  }

  if (cart) console.log(cart);

  return (
    <Box
      width={{
        base: "100%",
        md: "80%",
        xl: "70%",
      }}
      margin={"0 auto"}
      minHeight="100vh"
      paddingTop={3}
      // bg={"red"}
    >
      <NavBar colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Center minHeight={"90vh"}>
        <CartContext.Provider value={{ updateCart }}>
          <Outlet />
        </CartContext.Provider>
      </Center>
    </Box>
  );
}

export default App;
