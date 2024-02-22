import { Box, Center, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { array, string } from "prop-types";

const navText = {
  home: "Home",
  store: "Store",
  cart: "Cart",
};

const NavLink = ({ path, cart }) => {
  return (
    <>
      <ChakraLink
        textDecoration={"none"}
        as={ReactRouterLink}
        to={path}
        className="nav-link"
        fontSize={{
          base: "md",
          md: "xl",
          xl: "xl",
        }}
        _hover={{
          borderBottom: "none",
          color: "#00a773",
        }}
        position={"relative"}
      >
        {navText[path]}
        {cart && (
          <Center
            bg={"tomato"}
            w={"0px"}
            position={"absolute"}
            top={"-20%"}
            left={"120%"}
          >
            <Box
              fontSize={{
                base: "10px",
                md: "15px",
                xl: "20px",
              }}
              color={"#00a773"}
            >
              {cart.length}
            </Box>
          </Center>
        )}
      </ChakraLink>
    </>
  );
};

NavLink.propTypes = {
  path: string,
  cart: array,
};

export default NavLink;
