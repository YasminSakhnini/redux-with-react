import React from 'react';
import { connect } from 'react-redux';
import  buyIceCream from '../redux/iceCream/iceCreamActions';

function IceCreamContainer(props) {
  return (
    <div>
      <h1>Number of icecreams - {props.numOfIceCreams} </h1>
      <button onClick={props.buyIceCream}>Buy Icecream </button>
    </div>)
}

// ##How we can get the state from store, and dispatch an action from the component ?
// first step we define a new function "mapStateToProps" 

//Our props in this component will receive an additional props calls numOfIceCreams which
// reflects to the numOfIceCreams in the redux store

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

//The step number two
// difine a nother function "mapDispatchToProps"

//Our props in this component will receive an additional props calls buyIceCream which
// will dispatch to the cake to store

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream())
    }
  }

  //The step number three
  // connect these 2 functions with our react component 

}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);