import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmark from "../status-number-checkmark";
import PayButton from "../paybutton";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
// import PickUpButton from "../pickupbutton";

class DashboardPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmark></StatusNumberCheckmark>
          <PayButton><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButton>
          {/* <PickUpButton></PickUpButton> */}
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPage;