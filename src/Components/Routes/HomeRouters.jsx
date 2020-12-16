import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "../../Pages/Home/Containers/Home";

function HomeRouters() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/perfil/:id" />
      </Switch>
    </Router>
  );
}

export default HomeRouters;
