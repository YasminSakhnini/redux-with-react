import  { BUY_CAKE } from '../types';

const buyCake = (numberOfCakes = 1) => {
  return {
    type: BUY_CAKE,
    // All this "payload" does is sending additional information to the reducer
    payload: numberOfCakes
  }
}

export default buyCake;