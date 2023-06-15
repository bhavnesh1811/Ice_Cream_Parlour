import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
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
  return <Grid templateColumns={"repeat(3,1fr)"} gap={"20px"} m={"40px 20px"}>
    {icecreams?.map((e)=>(
      <Box key={e.id} boxShadow={"rgba(0,0,0,0.35)0px 5px 15px"} p={"20px"} borderRadius={"12px"} >
        <Text>Name : {e.name}</Text>
        <Text>Flavor : {e.Flavor}</Text>
        <Text>Description : {e.Description}</Text>
        <Text>Rs : {e.Price}</Text>

        <Flex justifyContent={"space-around"}>
          <EditModal {...e} />
          <Button>
            Delete
          </Button>
        </Flex>
      </Box>
    ))}
  </Grid>;
};

export default Inventory;
