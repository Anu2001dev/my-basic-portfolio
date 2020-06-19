import Navbar from "./components/navbar";
import Intro from "./components/intro";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Redirect to="/" />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Intro} />
        </Switch>
        {/* <Intro /> */}
      </Router>
    );
  }
}

export default App;
