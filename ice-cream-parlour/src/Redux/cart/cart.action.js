import axios from "axios";
import {
  ADD_CART_ERROR,
  ADD_CART_LOADING,
  ADD_CART_SUCCESS,
  DELETE_CART_ERROR,
  DELETE_CART_LOADING,
  DELETE_CART_SUCCESS,
  EDIT_CART_ERROR,
  EDIT_CART_LOADING,
  EDIT_CART_SUCCESS,
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionTypes";

export const getIceCreamsFromCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let data = await axios.get(`https://mock-server-2rva.onrender.com/cart`);
    // console.log(data.data);
    dispatch({ type: GET_CART_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const deleteIceCreamsFromCart = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CART_LOADING });
  try {
    await axios.delete(`https://mock-server-2rva.onrender.com/cart/${id}`);
    // console.log(data);
    dispatch({ type: DELETE_CART_SUCCESS });
    dispatch(getIceCreamsFromCart());
  } catch (error) {
    dispatch({ type: DELETE_CART_ERROR });
  }
};
export const editIceCreamsFromCart = (id, data) => async (dispatch) => {
  dispatch({ type: EDIT_CART_LOADING });
  try {
    await axios.patch(`https://mock-server-2rva.onrender.com/cart/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(edited);
    dispatch({ type: EDIT_CART_SUCCESS });
    dispatch(getIceCreamsFromCart());
  } catch (error) {
    dispatch({ type: EDIT_CART_ERROR });
  }
};
export const addIceCreamsToCart = (data) => async (dispatch) => {
  dispatch({ type: ADD_CART_LOADING });
  try {
    axios.post(`https://mock-server-2rva.onrender.com/cart`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(added);
    dispatch({ type: ADD_CART_SUCCESS });
    dispatch(getIceCreamsFromCart());
  } catch (error) {
    dispatch({ type: ADD_CART_ERROR });
  }
};
