import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productsCount: 0,
  offersCount: 0,
})

export default rootReducer;