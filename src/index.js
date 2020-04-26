import store from './store';
import * as actions from './actionTypes'

//the dispatch() will gett the new state
// state = reducer(state, action)
// notify the subscribers


const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
})
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'bug1'
  }
});

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
})
console.log('store', store.getState());
