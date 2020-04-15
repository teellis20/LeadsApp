import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import logo from './logo.svg';
import Main from "./pages/Main/Main";
import ProductForm from "./Components/ProductForm/ProductForm";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/product/:product"
            component={ProductForm}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
