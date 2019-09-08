import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GetMyCarButton from "./components/getmycarbutton";
import Wrapper from "./components/wrapper";

class App extends Component {
  render() {
    return (
      <Wrapper>
      <h1>Below is an example component for your reference</h1>
      <GetMyCarButton>Get my car!</GetMyCarButton>
      </Wrapper>
    );
  }
}

export default App;
