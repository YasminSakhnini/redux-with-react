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
  //with [ ] we will dynamically computed the name 
  //of the prosperity  "bugAdded", "bugResolved"
  //so if I want to change "bugAdded" on line 7 I dont need to touch this function
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs[index].resolved = true;
  },

});
