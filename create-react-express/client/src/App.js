import React, { Component } from "react";
import "./App.css";
import LoginPage from "../src/components/login-page";
import DashboardPage from "../src/components/dashboard-page";
import ArrivedView from "../src/components/arrived-view";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ValetHomePage from "./components/valet-homepage";
import ValetPark from "./components/valet-park";
import GuestQueue from "./components/valet-guest-queue";
import ValetArrived from "./components/valet-arrived";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LoginPage}></Route>
        <Route path='/dashboard' exact component={DashboardPage}></Route>
        <Route path='/arrived-view' exact component={ArrivedView}></Route>
        <Route path='/valet-homepage' exact component={ValetHomePage}></Route>
        <Route path='/valet-park' exact component={ValetPark}></Route>
        <Route path='/valet-guest-queue' exact component={GuestQueue}></Route>
        <Route path='/valet-arrived' exact component={ValetArrived}></Route>
      </Router>
    );
  }
}

export default App;
