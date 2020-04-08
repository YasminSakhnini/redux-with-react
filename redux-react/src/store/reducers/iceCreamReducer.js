import { BUY_ICECREAM } from '../types';

const initialState = {
  numOfIceCreams: 80
}

const iceCreamReducer = (state = initialState , action ) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams -1
    }
    default: return state
  }
}

export default iceCreamReducer;