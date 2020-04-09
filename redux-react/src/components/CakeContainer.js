import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import buyCake from '../store/actions/cakeActions';

function CakeContainer() {
  const [number, setNumer] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes from hook - { numOfCakes }</h2>
      <input
          type='text' 
          value={ number }
          onChange={ e => setNumer(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy { number } Cake </button>
    </div>
  )
}

export default CakeContainer;
