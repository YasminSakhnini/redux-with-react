import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productsCount: 0,
  offersCount: 0,
  api: apiReducer,
});

export default rootReducer;
