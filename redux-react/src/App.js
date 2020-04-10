import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import AppBar from './components/AppBar';
import StartPage from './components/StartPage';
import Offers from './components/Offers';
import Products from './components/Products';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <AppBar position="fixed" />
          <main>
            <Switch>
              <Redirect exact from='/' to='/startpage' />
              <Route exact path='/startpage' component={StartPage} />
              <Route exact path='/offers' component={Offers} />
              <Route exact path='/products' component={Products} />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
