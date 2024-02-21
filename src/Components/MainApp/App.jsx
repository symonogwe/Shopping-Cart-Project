import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Box, Center, useColorMode } from "@chakra-ui/react";
import { createContext, useState } from "react";
import useData from "../Hooks/useData";

// App color Mode = #00a773

export const CartContext = createContext();

function App() {
  // Fetch products data & pass down to store component
  const dataObj = useData();

  const { colorMode, toggleColorMode } = useColorMode();
  const [cart, setCartItems] = useState([]);

  // function to update cart state
  function updateCart(count) {
    setCartItems([...cart, count]);
  }

  if (cart.length > 0) console.log(cart);

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
        <CartContext.Provider value={{ updateCart, dataObj, cart }}>
          <Outlet context={colorMode} />
        </CartContext.Provider>
      </Center>
    </Box>
  );
}

export default App;
