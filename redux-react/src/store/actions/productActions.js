import axios from 'axios';
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  INCREASE_PRODUCTS_COUNTER,
  REDUCE_PRODUCTS_COUNTER,
}
  from '../types';

export const fetchProductsPending = () => {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  }
}

export const fetchProductsError = error => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error
  }
}

export const incrProductCounter = products => {
  return {
    type: INCREASE_PRODUCTS_COUNTER,
    payload: products
  }
}

export const reduProductCounter = products => {
  return {
    type: REDUCE_PRODUCTS_COUNTER,
    payload: products
  }
}


export const fetchProducts = () => {
  return function  action(dispatch){
    dispatch(fetchProductsPending())

    const request = axios()
    axios.get('products.json')
      .then(response => {
        const products = response.data
        dispatch(fetchProductsSuccess(products))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductsError())
      })
  }

}

export default fetchProducts;




