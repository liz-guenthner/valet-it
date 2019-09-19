import React, { Component } from "react";
import "./App.css";
import LoginPage from "../src/components/login-page";
import DashboardPage from "../src/components/dashboard-page";
import DashboardPaidPage from "../src/components/dashboard-paid";
import DashboardParkedPage from "../src/components/dashboard-parked";
import DashboardPickUpPage from "../src/components/dashboard-pickup";
import DashboardInRoutePage from "../src/components/dashboard-inroute";
import ArrivedView from "../src/components/arrived-view";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ValetHomePage from "./components/valet-homepage";
import ValetPark from "./components/valet-park";
import GuestQueue from "./components/valet-guest-queue";
import ValetArrived from "./components/valet-arrived";
import Checkout from "./components/checkout";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={LoginPage}></Route>
        <Route path='/dashboard' exact component={DashboardPage}></Route>
        <Route path='/dashboard-paid' exact component={DashboardPaidPage}></Route>
        <Route path='/dashboard-parked' exact component={DashboardParkedPage}></Route>
        <Route path='/dashboard-pickup' exact component={DashboardPickUpPage}></Route>
        <Route path='/dashboard-inroute' exact component={DashboardInRoutePage}></Route>
        <Route path='/arrived-view' exact component={ArrivedView}></Route>
        <Route path='/valet-homepage' exact component={ValetHomePage}></Route>
        <Route path='/valet-park' exact component={ValetPark}></Route>
        <Route path='/valet-guest-queue' exact component={GuestQueue}></Route>
        <Route path='/valet-arrived' exact component={ValetArrived}></Route>
        <Route path='/checkout' exact component={Checkout}></Route>
      </Router>
    );
  }
}

export default App;
