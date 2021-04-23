import React from "react";
// import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gameboard from "./components/Gameboard/Gameboard.jsx";

function App() {
  return (
    <Router>
      <section>
        <Gameboard />
        <Switch>{/* <Route exact path="/" components={Gameboard} /> */}</Switch>
      </section>
    </Router>
  );
}

export default App;
