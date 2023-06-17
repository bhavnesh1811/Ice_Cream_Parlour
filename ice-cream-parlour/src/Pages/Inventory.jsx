import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "../Modals/EditModal";
import { getIceCreams } from "../Redux/icecream/icecream.action";

const Inventory = () => {
  const { icecreams } = useSelector((store) => store.icecreamManager);
  console.log(icecreams);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIceCreams());
  }, [dispatch]);
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Flavor</Th>
          <Th>Description</Th>
          <Th>Price</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {icecreams?.map((e) => (
          <Tr key={e.id}>
            <Td>{e.id}</Td>
            <Td>{e.name}</Td>
            <Td>{e.Flavor}</Td>
            <Td>{e.Description}</Td>
            <Td>Rs {e.Price}</Td>
            <Td>
              <EditModal {...e} />
            </Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Inventory;
