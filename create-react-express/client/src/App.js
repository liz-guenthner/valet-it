import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import GuestLogin from "../src/components/guestlogin";
import PayNowButton from "../src/components/paynowbutton";

class App extends Component {
  render() {
    return (
      <LoginCard>
      <LogoButton>logo</LogoButton>
      <PayNowButton>paynowbutton</PayNowButton>
      <GuestLogin>guestlogin</GuestLogin>
      <ValetDriverButton>valetdriver</ValetDriverButton>
      </LoginCard>
    );
  }
}

export default App;
