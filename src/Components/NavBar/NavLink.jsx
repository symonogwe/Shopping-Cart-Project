import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { string } from "prop-types";

const navText = {
  home: "Home",
  store: "Store",
  cart: "Cart",
};

const NavLink = ({ path }) => {
  return (
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
    >
      {navText[path]}
    </ChakraLink>
  );
};

NavLink.propTypes = {
  path: string,
};

export default NavLink;
