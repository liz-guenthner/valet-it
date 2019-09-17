import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmark from "../status-number-checkmark";
import PayButtonGrey from "../paybutton";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
import PickUpButton from "../pickupbutton";
import EstWaitTimeDisplay from "../est-wait-time-display";
// import ArrivedButton from "../arrived-button";
// import ArrivedModal from "../arrived-modal";

class DashboardPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmark></StatusNumberCheckmark>
          <PayButtonGrey><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButtonGrey>
          <PickUpButton><EstWaitTimeDisplay></EstWaitTimeDisplay></PickUpButton>
          {/* <ArrivedButton><ArrivedModal></ArrivedModal></ArrivedButton> */}
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPage;