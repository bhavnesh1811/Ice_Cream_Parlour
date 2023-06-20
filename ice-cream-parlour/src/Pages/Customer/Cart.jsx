import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIceCreamsFromCart } from "../../Redux/cart/cart.action";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((store) => store.cartManager);
  console.log(cart, loading, error);
  useEffect(() => {
    dispatch(getIceCreamsFromCart());
  }, [dispatch]);
  return <div>Cart</div>;
};

export default Cart;
