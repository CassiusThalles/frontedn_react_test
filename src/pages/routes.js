import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./home";
import SignUp from "./signup";
import Pay from "./pay";
import Recognizer from "./recognizer";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" component={SignUp} />
        <Route path="/pay" component={Pay} />
        <Route path="/recognizer" component={Recognizer} />
      </Switch>
    </BrowserRouter>
  );
}
