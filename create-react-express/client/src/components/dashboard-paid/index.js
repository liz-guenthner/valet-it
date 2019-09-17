import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkPaid from "../status-number-checkmark-paid";
import PayButton from "../paybutton";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
import PickUpButtonYellow from "../pickupbutton-yellow";
import EstWaitTimeDisplay from "../est-wait-time-display";

class DashboardPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkPaid></StatusNumberCheckmarkPaid>
          <PayButton><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButton>
          <PickUpButtonYellow><EstWaitTimeDisplay></EstWaitTimeDisplay></PickUpButtonYellow>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPage;