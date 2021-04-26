import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gameboard from "./components/Gameboard/Gameboard.jsx";
import Home from "./components/Home/Home.jsx";
import Clue from "./components/Clue/Clue.jsx";

function App() {
  return (
    <Router>
      <section id="container">
        <Clue />
        <Switch>
          {/* <Route exact path="/game" component={Gameboard} /> */}
          {/* <Route exact path="/login" components={Login} /> */}
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </section>
    </Router>
  );
}

export default App;
