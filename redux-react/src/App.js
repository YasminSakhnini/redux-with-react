import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import AppBar from "./components/AppBar";
import StartPage from "./views/StartPage";
import Offers from "./views/Offers";
import Products from "./views/Products";
import data from "./products.json";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "STORE_PRODUCT", payload: data });
  }, []);
  return (
    <Router>
      <React.Fragment>
        <AppBar position="fixed" />
        <main>
          <Switch>
            <Redirect exact from="/" to="/startpage" />
            <Route exact path="/startpage" component={StartPage} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
