import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { icecreamReducer } from "./icecream/icecream.reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
  icecreamManager: icecreamReducer,
  cartManager: cartReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
