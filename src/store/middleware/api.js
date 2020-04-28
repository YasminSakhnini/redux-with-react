import axios from 'axios';

const api = ({ dispatch }) => next => action => {
  if(action.type !== 'apiCallBegan') return async next(action);
  
  next(action);
  const { url, method, data, onSucces, onError } = action.payload;
  try{
  const response = await axios.request({
    baseURL: 'http://localhost:9001/api',
    url, // /bugs so we need baseURL also 
    method,
    data
  });
  dispatch({ type: onSucces, payload: response.data });

} catch(error) {
  dispatch({ type: onError, payload: error })
}

};

export default api;