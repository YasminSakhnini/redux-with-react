import configureStore from './store/configureStore';
import { bugAdded, bugResolved, getUnresolvedBugs } from './store/bugs';
import { projectAdded } from './store/projects';

const store = configureStore();

store.subscribe(() => {
  console.log('Store changed!');
})
store.dispatch(projectAdded({name: 'Project 1'}))
store.dispatch(bugAdded({ description: 'Bug 1'}));
store.dispatch(bugAdded({ description: 'Bug 2'}));
store.dispatch(bugAdded({ description: 'Bug 3'}));
store.dispatch(bugResolved({id: 1}));

const unReslovedBugs = getUnresolvedBugs(store.getState())
console.log('unReslovedBugs', unReslovedBugs);




//Better way than this to select part of the state is to create a selctor  "getUnresolvedBugs"
/*
const unReslovedBugs = store
  .getState()
  .entities.bugs.filter(bug => !bug.resolved )
console.log('unReslovedBugs', unReslovedBugs);

console.log('store', store.getState());
*/