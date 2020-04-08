import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import buyIceCream from '../store/actions/iceCreamActions';

function IceCreamContainer() {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Icecream - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Icecream Now</button>
    </div>
  )
}

export default IceCreamContainer;