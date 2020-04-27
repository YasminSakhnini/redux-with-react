import { createAction, createReducer } from '@reduxjs/toolkit';

const bugUpdated = createAction("bugUpdated");
console.log('bugUpdated', bugUpdated({id: 1}));

//Action cretors
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//Reducer
let lastId = 0;
createReducer([], {
   //key: value
   //actions: functions (event => event handler)
  bugAdded: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },

  bugResolved: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs[index].resolved = true;
  },

});
