import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CEN } from "../typography";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <Flex justifyContent={CEN} gap="50px" m={"20px auto"}>
      <Button
        onClick={() => nav("/owner")}
        colorScheme={"teal"}
        variant={"solid"}
      >
        Owner Section
      </Button>
      <Button
        onClick={() => nav("/customer")}
        colorScheme={"teal"}
        variant={"solid"}
      >
        Customer Section
      </Button>
    </Flex>
  );
};

export default Navbar;
