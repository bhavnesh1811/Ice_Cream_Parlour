import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SE } from "../typography";

const OwnerNavbar = () => {
  return (
    <Flex
      justifyContent={SE}
      p={"20px"}
      backgroundColor={"teal"}
      color={"white"}
    >
      <Link to="/owner/login">Login</Link>
      <Link to="/owner/inventory">Inventory</Link>
      <Link to="/owner/icecreams/add">Add IceCream</Link>
    </Flex>
  );
};

export default OwnerNavbar;
