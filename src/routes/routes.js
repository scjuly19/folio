import React from "react";
import { Route, HashRouter} from "react-router-dom";
import Home from '../pages/home';

const Routes = () => (
  <HashRouter>
    {" "}
    <Route exact path="/" component={Home} />
  
  </HashRouter>
);

export default Routes;
