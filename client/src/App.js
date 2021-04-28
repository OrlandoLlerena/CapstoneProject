import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gameboard from "./components/Gameboard/Gameboard.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <Router>
      <section id="container">
        <Switch>
          <Route exact path="/game" component={Gameboard} />
          {/* <Route exact path="/login" components={Login} /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
