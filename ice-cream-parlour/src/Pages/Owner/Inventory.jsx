import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error404 from "../../Components/Error/Error404";
import Loader from "../../Components/Loader/Loader";
import { LOADER_URL } from "../../constants/typography";
import { ERROR_URL } from "../../constants/typography";
import EditModal from "../../Modals/EditModal";
import {
  deleteIceCreams,
  getIceCreams,
} from "../../Redux/icecream/icecream.action";

const Inventory = () => {
  const { icecreams, loading, error } = useSelector(
    (store) => store.icecreamManager
  );
  console.log(icecreams, loading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIceCreams());
  }, []);

  if (loading) {
    console.log(loading);
    return <Loader gif={LOADER_URL} />;
  }

  if (error) {
    return <Error404 gif={ERROR_URL} />;
  }

  const deleteIceCream = (id) => {
    dispatch(deleteIceCreams(id));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Flavor</Th>
          <Th>Description</Th>
          <Th>Price</Th>
          <Th>Stock</Th>
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
            <Td>{e.Stock}</Td>
            <Td>
              <EditModal {...e} />
            </Td>
            <Td>
              <Button onClick={() => deleteIceCream(e.id)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Inventory;
