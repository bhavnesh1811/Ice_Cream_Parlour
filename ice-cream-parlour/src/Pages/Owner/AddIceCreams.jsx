import React,{useState} from "react";
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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addIceCreams } from "../../Redux/icecream/icecream.action";

const AddIceCreams = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Flavor, setFlavor] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const dispatch = useDispatch();

  const addIceCream = (id) => {
    const data = {
      name,
      Flavor,
      Description,
      Price,
      Stock,
    };
    console.log(id,data);

    dispatch(addIceCreams(id, data));
  };

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Edit
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Edit Ice Cream Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              m={"10px auto"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type={"text"}
              placeholder={"Enter  name"}
            />
            <Input
              m={"10px auto"}
              value={Flavor}
              onChange={(e) => setFlavor(e.target.value)}
              type={"text"}
              placeholder={"Enter  flavor"}
            />
            <Input
              m={"10px auto"}
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              type={"text"}
              placeholder={"Enter  description"}
            />
            <Input
              m={"10px auto"}
              value={Price}
              onChange={(e) => setPrice(+e.target.value)}
              type={"text"}
              placeholder={"Enter  price"}
            />
            <Input
              m={"10px auto"}
              value={Stock}
              onChange={(e) => setStock(+e.target.value)}
              type={"number"}
              placeholder={"Enter Updated Stock"}
            />
          </ModalBody>
          <ModalFooter gap={"20px"}>
            <Button onClick={addIceCream}>Add</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddIceCreams;
