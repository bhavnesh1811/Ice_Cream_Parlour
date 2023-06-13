import {
  GET_ICE_CREAM_ERROR,
  GET_ICE_CREAM_LOADING,
  GET_ICE_CREAM_SUCCESS,
} from "./icecream.actionTypes";

const initialState = {
  loading: false,
  error: false,
  icecreams: [],
};

export const icecreamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ICE_CREAM_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_ICE_CREAM_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case GET_ICE_CREAM_ERROR: {
      return { ...state, loading: false, error: true };
    }

    default: {
      return initialState;
    }
  }
};
