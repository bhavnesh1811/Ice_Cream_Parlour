import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getIceCreams } from "../../Redux/icecream/icecream.action";
import Loader from "../../Components/Loader/Loader";
import { ERROR_URL, LOADER_URL } from "../../constants/typography";
import Error404 from "../../Components/Error/Error404";
import {
  addIceCreamsToCart,
  getIceCreamsFromCart,
} from "../../Redux/cart/cart.action";
import { useState } from "react";
const Icecreams = () => {
  const toast = useToast();
  const { icecreams, loading, error } = useSelector(
    (store) => store.icecreamManager
  );
  const { cart } = useSelector((store) => store.cartManager);

  console.log(icecreams,cart, loading, error);
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");
  const [iceCreamData, setIceCreamData] = useState(icecreams);
  const [cartData, setCartData] = useState(cart);
  useEffect(() => {
    dispatch(getIceCreams());
    setIceCreamData(icecreams);
  }, [icecreams?.length]);

  useEffect(() => {
    dispatch(getIceCreamsFromCart());
    setCartData(cart);
  }, []);

  if (loading) {
    // console.log(loading);
    return <Loader gif={LOADER_URL} />;
  }

  if (error) {
    return <Error404 gif={ERROR_URL} />;
  }

  const addToCart = (data) => {
    console.log(data,cartData?.length);
    if (cartData?.length > 0) {
      let mapped=cart?.map((e)=>{
        if(e.id===data.id){
          return true;
        }
        return false;
      })
      console.log(mapped);

    } else {
      data.Quantity = 1;
      // console.log(data.Quantity);
      dispatch(addIceCreamsToCart(data, toast));
    }
  };

  const filterDataByFlavor = (flavor) => {
    if (flavor === "") {
      setIceCreamData(icecreams);
    } else {
      const newfilteredData = icecreams.filter((e) => e.Flavor === flavor);
      setIceCreamData(newfilteredData);
    }
  };

  const sortIceCreamsByPrice = (price) => {
    // console.log(iceCreamData);
    if (price === "") {
      setIceCreamData(iceCreamData);
    } else {
      if (price === "Lth") {
        const sortIceCreamsByPriceLowToHigh = iceCreamData?.sort(
          (a, b) => a.Price - b.Price
        );
        setIceCreamData(sortIceCreamsByPriceLowToHigh);
      } else {
        const sortIceCreamsByPriceLowToHigh = iceCreamData?.sort(
          (a, b) => b.Price - a.Price
        );
        setIceCreamData(sortIceCreamsByPriceLowToHigh);
      }
    }
  };
  // console.log(flavor);
  return (
    <Box>
      <Flex>
        <Box m={"20px 20px 20px"} w={"20%"}>
          <Select
            value={flavor}
            onChange={(e) => {
              setFlavor(e.target.value);
              filterDataByFlavor(e.target.value);
            }}
          >
            <option value="">Select Flavor</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Mint">Mint</option>
          </Select>
        </Box>

        <Box m={"20px 20px 20px"} w={"20%"}>
          <Select
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              sortIceCreamsByPrice(e.target.value);
            }}
          >
            <option value="">Sort By Price</option>
            <option value="Lth">Low to High</option>
            <option value="Htl">High to Low</option>
          </Select>
        </Box>
      </Flex>
      <Box>
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
            {iceCreamData?.map((e) => (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.name}</Td>
                <Td>{e.Flavor}</Td>
                <Td>{e.Description}</Td>
                <Td>Rs {e.Price}</Td>
                <Td>{e.Stock}</Td>
                <Td>
                  <Button onClick={() => addToCart({ ...e })}>
                    Add to Cart
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Icecreams;
