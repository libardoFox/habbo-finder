import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "../../Pages/Home/Containers/Home";
import HabboProfile from "../../Components/HabboProfile/Containers/habboProfile";
function HomeRouters() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={HabboProfile}/>
      </Switch>
    </Router>
  );
}

export default HomeRouters;
