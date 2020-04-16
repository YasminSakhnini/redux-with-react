import { combineReducers } from "redux";
import productReducer from "./productReducer";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
  product: productReducer,
  productsCount: 0,
  offersCount: 0,
  api: apiReducer,
});

export default rootReducer;
