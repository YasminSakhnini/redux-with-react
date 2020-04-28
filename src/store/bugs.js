import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    // actions => action handlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } =  action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId);
      bugs[index].userId = userId;

      bugs.push({
        assignedToUser: true,
        name: action.payload.name,
      })
    },

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
    }
    
  }
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

//Selector 
export const getUnresolvedBugs = state =>
  state.entities.bugs.filter(bug => !bug.resolved);

export const getBugsByUser = userId => state =>
  state.entities.bugs.filter(bug => bug.userId === userId);
