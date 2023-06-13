import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { icecreamReducer } from "./icecream/icecream.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  icecreamManager: icecreamReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
