import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LogoButton from "../src/components/logoButton";

class App extends Component {
  render() {
    return (
      <LogoButton>logo</LogoButton>
    );
  }
}

export default App;
