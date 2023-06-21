import axios from "axios";
import {
  ADD_ICE_CREAM_ERROR,
  ADD_ICE_CREAM_LOADING,
  ADD_ICE_CREAM_SUCCESS,
  DELETE_ICE_CREAM_ERROR,
  DELETE_ICE_CREAM_LOADING,
  DELETE_ICE_CREAM_SUCCESS,
  EDIT_ICE_CREAM_ERROR,
  EDIT_ICE_CREAM_LOADING,
  EDIT_ICE_CREAM_SUCCESS,
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

export const deleteIceCreams = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ICE_CREAM_LOADING });
  try {
    await axios.delete(`https://mock-server-2rva.onrender.com/icecream/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(data);
    dispatch(getIceCreams());
    dispatch({ type: DELETE_ICE_CREAM_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_ICE_CREAM_ERROR });
  }
};
export const editIceCreams = (id, data) => async (dispatch) => {
  dispatch({ type: EDIT_ICE_CREAM_LOADING });
  try {
    await axios.patch(`https://mock-server-2rva.onrender.com/icecream/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: EDIT_ICE_CREAM_SUCCESS });
    dispatch(getIceCreams());
    
  } catch (error) {
    dispatch({ type: EDIT_ICE_CREAM_ERROR });
  }
};
export const addIceCreams = (data) => async (dispatch) => {
  dispatch({ type: ADD_ICE_CREAM_LOADING });
  try {
    await axios.post(`https://mock-server-2rva.onrender.com/icecream`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(added);
    dispatch({ type: ADD_ICE_CREAM_SUCCESS });
    dispatch(getIceCreams());
  } catch (error) {
    dispatch({ type: ADD_ICE_CREAM_ERROR });
  }
};
