import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import Main from "./pages/Main/Main";
import ProductSurvey from "./pages/ProductSurvey/ProductSurvey";

import PartnerPage from "./Components/PartnerPage/PartnerPage";

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/product/:product"
            component={ProductSurvey}
            />
          <Route
            exact
            path="/partners"
            component={PartnerPage}
            />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
