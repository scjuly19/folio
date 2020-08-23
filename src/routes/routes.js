import React from "react";
import { Route, HashRouter} from "react-router-dom";
import Main from '../pages/mainPage'

const Routes = () => (
  <HashRouter>
    {" "}
    <Route exact path="/" component={Main} />
  
  </HashRouter>
);

export default Routes;
