import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import CardPage from "../pages/CardPage";
import LandingPage from "../pages/LandingPage";
import Repos from "../pages/Repos";
import Starred from "../pages/Starred";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/card" component={CardPage} />
      <Route exact path="/repos" component={Repos} />
      <Route exact path="/starred" component={Starred} />
    </Switch>
  );
}
