import { BUY_CAKE } from '../types';

const initialState = {
  numOfCakes: 200
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: action.payload <= state.numOfCakes ? state.numOfCakes - action.payload : state.numOfCakes ,
    }
    default: return state
  }
}

export default cakeReducer;