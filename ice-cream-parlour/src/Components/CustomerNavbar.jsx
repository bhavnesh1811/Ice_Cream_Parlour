import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SE } from "../constants/typography";

const CustomerNavbar = () => {
  return (
    <Flex
      justifyContent={SE}
      p={"20px"}
      backgroundColor={"teal"}
      color={"white"}
    >
      <Link to="/customer/Ice-creams">Ice Creams</Link>
      <Link to="/customer/cart">Cart</Link>
    </Flex>
  );
};

export default CustomerNavbar;
