import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import buyCake from '../store/actions/cakeActions';

function CakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes from hook - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
    </div>
  )
}

export default CakeContainer;