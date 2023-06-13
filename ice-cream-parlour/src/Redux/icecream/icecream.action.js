import axios from "axios";
import {
  GET_ICE_CREAM_ERROR,
  GET_ICE_CREAM_LOADING,
  GET_ICE_CREAM_SUCCESS,
} from "./icecream.actionTypes";

export const getIceCreams = () => async (dispatch) => {
  dispatch({ type: GET_ICE_CREAM_LOADING });
  try {
    let data = await axios.get(
      `https://mock-server-2rva.onrender.com/icecream`
    );
    // console.log(data.data);
    dispatch({ type: GET_ICE_CREAM_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_ICE_CREAM_ERROR });
  }
};
