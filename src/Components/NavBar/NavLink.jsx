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
    >
      {navText[path]}
    </ChakraLink>
  );
};

NavLink.propTypes = {
  path: string,
};

export default NavLink;
