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

const initialState = {
  loading: false,
  error: false,
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case ADD_CART_SUCCESS: {
      return { ...state, loading: false, error: false};
    }
    case ADD_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_CART_SUCCESS: {
      return { ...state, loading: false, error: false ,cart:payload};
    }
    case GET_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case EDIT_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case EDIT_CART_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case EDIT_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_CART_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_CART_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case DELETE_CART_ERROR: {
      return { ...state, loading: false, error: true };
    }

    default: {
      return initialState;
    }
  }
};
