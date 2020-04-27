import { createAction } from '@reduxjs/toolkit';

const bugUpdated = createAction("bugUpdated");
console.log('bugUpdated', bugUpdated({id: 1}));

//so no need for Action types anymore 
// if we need these constans we can easily get them from
// bugUpdated.type  or
//bugUpdated.toString()


//Action cretors
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//Reducer
let lastId = 0;

// ## With ducks pattern 
// -reducer should be exported default 
// -action creators should be exported individually 
// No need to export the constans line 3,4,5

export default function reducer(state = [], action ) {
  switch(action.type){
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];
    case bugRemoved.type:
      return state.filter(bug => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map(bug =>
        bug.id !== action.payload.id ? bug : {...bug, resolved: true}
      );
    default: 
      return state;
  }
}


