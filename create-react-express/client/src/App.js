import React, { Component } from "react";
import "./App.css";
import LoginPage from "../src/components/login-page";
import DashboardPage from "../src/components/dashboard-page";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LoginPage}></Route>
        <Route path='/dashboard' exact component={DashboardPage}></Route>
      </Router>
    );
  }
}

export default App;
