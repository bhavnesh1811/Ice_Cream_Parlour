import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addIceCreams } from "../../Redux/icecream/icecream.action";
const AddIceCreams = () => {
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Flavor, setFlavor] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const addIceCream = () => {
    if (
      name === "" ||
      Flavor === "" ||
      Description === "" ||
      Price === "" ||
      Stock === ""
    ) {
      return toast({
        title: "Some Fields Empty",
        description: "Please fill All details First..",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    const data = {
      name,
      Flavor,
      Description,
      Price,
      Stock,
    };
    console.log(data);

    dispatch(addIceCreams(data));
    return toast({
      title: "Icecream Added Succesfully",
      description: "Please Check Inventory Page.",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <FormControl
      isRequired
      width={"30%"}
      m={"30px auto"}
      boxShadow={"rgba(0,0,0,0.35)0px 5px 15px"}
      p={"20px"}
      borderRadius={"12px"}
    >
      <FormLabel>IceCream name</FormLabel>
      <Input
        m={"10px auto"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type={"text"}
        placeholder={"Enter IceCream name"}
      />
      <Select
        m={"10px auto"}
        value={Flavor}
        onChange={(e) => setFlavor(e.target.value)}
        type={"text"}
        placeholder="Select IceCream flavor"
      >
        <option value="Chocolate">Chocolate</option>
        <option value="Vanilla">Vanilla</option>
        <option value="Strawberry">Strawberry</option>
        <option value="Mint">Mint</option>
      </Select>
      <Input
        m={"10px auto"}
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        type={"text"}
        placeholder={"Enter IceCream description"}
      />
      <Input
        m={"10px auto"}
        value={Price}
        onChange={(e) => setPrice(+e.target.value)}
        type={"text"}
        placeholder={"Enter IceCream price"}
      />
      <Input
        m={"10px auto"}
        value={Stock}
        onChange={(e) => setStock(+e.target.value)}
        type={"number"}
        placeholder={"Enter Current Stock"}
      />

      <Button onClick={addIceCream} colorScheme={"teal"}>
        Add IceCream
      </Button>
    </FormControl>
  );
};

export default AddIceCreams;
