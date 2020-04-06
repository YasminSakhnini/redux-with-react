import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <Provider store= { store }>
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;
