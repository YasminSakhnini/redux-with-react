import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  INCREASE_PRODUCTS_COUNTER,
  REDUCE_PRODUCTS_COUNTER,
}
  from '../types';

const initialState = {
  loading: false,
  products: [],
  error: '',
  productsCount: 10,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case INCREASE_PRODUCTS_COUNTER:
      return {
        ...state,
        products: action.payload,
        productsCount: state.productsCount + 1
      }
    case REDUCE_PRODUCTS_COUNTER:
      return {
        ...state,
        products: action.payload,
        productsCount: state.productsCount - 1
      }
    default: return state
  }
}

export default productReducer;
