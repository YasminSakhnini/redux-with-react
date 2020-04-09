import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
}
  from '../types';

export const fetchUsersReq = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailuer = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersReq())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUsersFailuer(errorMsg))
      })

  }
}

export default fetchUsers;




