import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import GuestLogin from "../src/components/guestlogin";
import PayButton from "../src/components/paybutton";
import PickUpButton from "../src/components/pickupbutton";

class App extends Component {
  render() {
    return (
      <LoginCard>
      <LogoButton>logo</LogoButton>
      <PickUpButton>pickupbutton</PickUpButton>
      <PayButton>paybutton</PayButton>
      <GuestLogin>guestlogin</GuestLogin>
      <ValetDriverButton>valetdriver</ValetDriverButton>
      </LoginCard>
    );
  }
}

export default App;
