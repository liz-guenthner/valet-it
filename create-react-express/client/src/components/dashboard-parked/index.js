import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkParked from "../status-number-checkmark-parked";
import PayButtonYellow from "../paybutton-yellow";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
import PickUpButton from "../pickupbutton";
import EstWaitTimeDisplay from "../est-wait-time-display";

class DashboardParkedPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkParked></StatusNumberCheckmarkParked>
          <PayButtonYellow><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButtonYellow>
          <PickUpButton><EstWaitTimeDisplay></EstWaitTimeDisplay></PickUpButton>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardParkedPage;