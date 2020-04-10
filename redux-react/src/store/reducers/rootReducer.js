import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productsCount: 1,
})

export default rootReducer;