import React, { Component } from "react";
import "./App.css";
import LoginPage from "../src/components/login-page";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LoginPage}></Route>
      </Router>
    );
  }
}

export default App;
