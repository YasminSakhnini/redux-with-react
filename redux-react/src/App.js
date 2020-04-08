import React from 'react';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import IceCreamContainer from './components/IceCreamContainer';


function App() {
  return (
    <Provider store= { store }>
      <CakeContainer />
      <IceCreamContainer />
    </Provider>
  );
}

export default App;
