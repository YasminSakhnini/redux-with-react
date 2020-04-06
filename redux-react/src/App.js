import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';


function App() {
  return (
    <Provider store= { store }>
      <HooksCakeContainer />
      <CakeContainer />
    </Provider>
  );
}

export default App;
