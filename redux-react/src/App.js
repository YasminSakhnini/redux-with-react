import React from 'react';
//import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './store/store';
//import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      {/*<CakeContainer />
      <IceCreamContainer /> */}
      <UserContainer />
    </Provider>
  );
}

export default App;
