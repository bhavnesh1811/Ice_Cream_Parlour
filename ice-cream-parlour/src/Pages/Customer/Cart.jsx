import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIceCreamsToCart,
  deleteIceCreamsFromCart,
  getIceCreamsFromCart,
} from "../../Redux/cart/cart.action";
import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Loader from "../../Components/Loader/Loader";
import { ERROR_URL, LOADER_URL } from "../../constants/typography";
import Error404 from "../../Components/Error/Error404";
const Cart = () => {
  const { cart, loading, error } = useSelector(
    (store) => store.cartManager
  );

  console.log(cart, loading, error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIceCreamsFromCart());
  }, [dispatch]);

  if (loading) {
    console.log(loading);
    return <Loader gif={LOADER_URL} />;
  }

  if (error) {
    return <Error404 gif={ERROR_URL} />;
  }

  const deleteFromCart = (data) => {
    // console.log(data.id,data);

    dispatch(deleteIceCreamsFromCart(data.id));
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
          <Th>Quantity</Th>
          <Th>Add to Cart</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cart?.map((e) => (
          <Tr key={e.id}>
            <Td>{e.id}</Td>
            <Td>{e.name}</Td>
            <Td>{e.Flavor}</Td>
            <Td>{e.Description}</Td>
            <Td>Rs {e.Price}</Td>
            <Td>{e.Quantity}</Td>
            <Td>
              <Button onClick={() => deleteFromCart({ ...e })}>Delete from Cart</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Cart;
