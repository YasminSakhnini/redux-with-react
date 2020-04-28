import configureStore from './store/configureStore';
import { bugAdded, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser } from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

store.subscribe(() => {
  console.log('Store changed!');
})
store.dispatch(projectAdded({name: 'Project 1'}))
store.dispatch(bugAdded({ description: 'Bug 1'}));
store.dispatch(bugAdded({ description: 'Bug 2'}));
store.dispatch(bugAdded({ description: 'Bug 3'}));

store.dispatch(bugResolved({id: 1}));

store.dispatch(userAdded({ name: 'Yas' }));
store.dispatch(userAdded({ name: 'Ham' }));

store.dispatch(bugAssignedToUser({bugId: 1, userId: 1}));

const bugs = getBugsByUser(1)(store.getState());
console.log('bugs for userId 1', bugs);


const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log('x === y', x === y); // >> false we get 2 different arrays in memory
//It is a proplem with react because 
//it will rerender the component regardless of its state
//SO the we should use memoization on this function getUnresolvedBugs
//f(x) => y
// { input: 1, output: 2 }
// so if the bugs did not changed we can get the bugs from the cache 
// we dont need to memoizing it by hand .. npm i reselect
