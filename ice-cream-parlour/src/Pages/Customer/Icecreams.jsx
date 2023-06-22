import React, { useEffect } from "react";
import { Button, Table, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getIceCreams } from "../../Redux/icecream/icecream.action";
import Loader from "../../Components/Loader/Loader";
import { ERROR_URL, LOADER_URL } from "../../constants/typography";
import Error404 from "../../Components/Error/Error404";
import {
  addIceCreamsToCart,
  editIceCreamsFromCart,
  getIceCreamsFromCart,
} from "../../Redux/cart/cart.action";
const Icecreams = () => {
  const toast=useToast()
  const { icecreams, loading, error } = useSelector(
    (store) => store.icecreamManager
  );
  // const { cart } = useSelector((store) => store.cartManager);
  console.log(icecreams, loading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIceCreams());
  }, []);
  // useEffect(() => {
  //   dispatch(getIceCreamsFromCart());
  // }, [dispatch]);

  if (loading) {
    console.log(loading);
    return <Loader gif={LOADER_URL} />;
  }

  if (error) {
    return <Error404 gif={ERROR_URL} />;
  }

  const addToCart = (data) => {
    // if (cart?.length > 0) {
    //   cart?.map((e) => {
    //     if (e.id === data.id) {
    //       return e.Quantity++;
    //     }
    //     return e;
    //   });
    //   //  data.Quantity++;
    //   console.log(cart);
    //   console.log(data.Quantity);
    //   dispatch(editIceCreamsFromCart(data.id, data));
    // } else {
      console.log(data);
      data.Quantity = 1;
      console.log(data.Quantity);
      dispatch(addIceCreamsToCart(data,toast));
    
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
          <Th>Add to Cart</Th>
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
              <Button onClick={() => addToCart({ ...e })}>Add to Cart</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Icecreams;
