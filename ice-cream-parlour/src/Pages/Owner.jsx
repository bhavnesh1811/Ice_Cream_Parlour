import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import OwnerNavbar from "../Components/OwnerNavbar";
import { getIceCreams } from "../Redux/icecream/icecream.action";

const Owner = () => {
  
  return (
    <div>
      <OwnerNavbar />
    </div>
  );
};

export default Owner;
