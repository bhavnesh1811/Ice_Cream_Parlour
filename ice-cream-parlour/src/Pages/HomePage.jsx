import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CEN } from "../constants/typography";
// import Navbar from "../Components/Navbar";
const HomePage = () => {
  const nav = useNavigate();
  return (
    <Flex justifyContent={CEN} gap="50px" m={"20px auto"}>
      <Button
        onClick={() => nav("/owner/login")}
        colorScheme={"teal"}
        variant={"solid"}
      >
        Owner Section
      </Button>
      <Button
        onClick={() => nav("/customer/icecreams")}
        colorScheme={"teal"}
        variant={"solid"}
      >
        Customer Section
      </Button>
    </Flex>
  );
};

export default HomePage;
