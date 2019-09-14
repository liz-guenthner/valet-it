import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import GuestLogin from "../src/components/guestlogin";
import OneBubble from "../src/components/onebubble";
import TwoBubble from "../src/components/twobubble";
import ThreeBubble from "../src/components/threebubble";
import FourBubble from "../src/components/fourbubble";
import FiveBubble from "../src/components/fivebubble";
import About from './view/about'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import * as components from '../src/components'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/about' exact component={About}></Route>
        <LoginCard>
          <OneBubble>1</OneBubble>
          <TwoBubble>2</TwoBubble>
          <ThreeBubble>3</ThreeBubble>
          <FourBubble>4</FourBubble>
          <FiveBubble>5</FiveBubble>
        <LogoButton>logo</LogoButton>
        <GuestLogin>guestlogin</GuestLogin>
        <ValetDriverButton>valetdriver</ValetDriverButton>
        </LoginCard>
      </Router>
    );
  }
}

export default App;
