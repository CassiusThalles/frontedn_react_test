import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import SignUp from "./signup";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
