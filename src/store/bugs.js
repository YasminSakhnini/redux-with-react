// Action types
const BUG_ADDED ='bugAdded';
const BUG_REMOVED ='bugRemoved';
const BUG_RESOLVED ='bugResolved';


//Action cretors
export const bugAdded = description => ({
  type: BUG_ADDED,
  payload: {
    description
  }
});

export const bugResolved = id => ({
  type: BUG_RESOLVED,
    payload: {
      id
    }
});


//Reducer
let lastId = 0;

// ## With ducks pattern 
// -reducer should be exported default 
// -action creators should be exported individually 
// No need to export the constans line 3,4,5

export default function reducer(state = [], action ) {
  switch(action.type){
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ];
    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map(bug =>
        bug.id !== action.payload.id ? bug : {...bug, resolved: true}
      );
    default: 
      return state;
  }
}


