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

  // function to delete cart item
  function deleteItem(id) {
    const newArr = cart.filter((obj) => {
      if (obj.id !== id) return obj;
      return;
    });

    setCartItems(newArr);
  }

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
      className="main-app-box"
      data-testid={"main-app-box"}
    >
      <NavBar
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        cart={cart}
      />
      <Center minHeight={"90vh"}>
        <CartContext.Provider
          value={{ updateCart, dataObj, cart, deleteItem, colorMode }}
        >
          <Outlet />
        </CartContext.Provider>
      </Center>
    </Box>
  );
}

export default App;
