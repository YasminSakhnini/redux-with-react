import React from 'react';
import { connect } from 'react-redux';
import  buyCake from '../redux/cake/cakeActions';

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes - { props.numOfCakes } </h1>
      <button onClick= { props.buyCake }>Buy cake</button>
    </div>)
}

// ##How we can get the state from store, and dispatch an action from the component ?
// first step we define a new function "mapStateToProps" 

//Our props in this component will receive an additional props calls numOfCakes which
// reflects to the numOfCakes in the redux store

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

//The step number two
// difine a nother function "mapDispatchToProps"

//Our props in this component will receive an additional props calls buyCake which
// will dispatch to the cake to store

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => {
      dispatch(buyCake())
    }
  }

  //The step number three
  // connect these 2 functions with our react component 

}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);