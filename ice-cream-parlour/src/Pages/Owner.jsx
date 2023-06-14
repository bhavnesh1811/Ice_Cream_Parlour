import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import OwnerNavbar from "../Components/OwnerNavbar";
import { getIceCreams } from "../Redux/icecream/icecream.action";

const Owner = () => {
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getIceCreams());
  }, [dispatch]);
  return (
    <div>
      <OwnerNavbar />
    </div>
  );
};

export default Owner;
