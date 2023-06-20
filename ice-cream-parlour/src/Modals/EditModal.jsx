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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editIceCreams, getIceCreams } from "../Redux/icecream/icecream.action";
const EditModal = ({ name, Description, Price, Flavor, Stock, id }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  console.log(name, Description, Price, Flavor);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [newName, setnewName] = useState(name);
  const [newdescription, setnewDescription] = useState(Description);
  const [newflavor, setnewFlavor] = useState(Flavor);
  const [newprice, setnewPrice] = useState(Price);
  const [newstock, setnewStock] = useState(Stock);
  const dispatch = useDispatch();

  const editIceCream = (id) => {
    const data = {
      name: newName,
      Flavor: newflavor,
      Description: newdescription,
      Price: +newprice,
      Stock: +newstock,
    };
    console.log(id, data);

    dispatch(editIceCreams(id, data));
    dispatch(getIceCreams());
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
              value={newName}
              onChange={(e) => setnewName(e.target.value)}
              type={"text"}
              placeholder={"Enter new name"}
            />
            <Input
              m={"10px auto"}
              value={newflavor}
              onChange={(e) => setnewFlavor(e.target.value)}
              type={"text"}
              placeholder={"Enter new flavor"}
            />
            <Input
              m={"10px auto"}
              value={newdescription}
              onChange={(e) => setnewDescription(e.target.value)}
              type={"text"}
              placeholder={"Enter new description"}
            />
            <Input
              m={"10px auto"}
              value={newprice}
              onChange={(e) => setnewPrice(+e.target.value)}
              type={"text"}
              placeholder={"Enter new price"}
            />
            <Input
              m={"10px auto"}
              value={newstock}
              onChange={(e) => setnewStock(+e.target.value)}
              type={"number"}
              placeholder={"Enter Updated Stock"}
            />
          </ModalBody>
          <ModalFooter gap={"20px"}>
            <Button onClick={() => editIceCream(id)}>Edit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
