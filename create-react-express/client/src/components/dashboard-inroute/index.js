import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkInRoute from "../status-number-checkmark-inroute";
import EstWaitTime from "../est-wait-time";

class DashboardPickUpPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkInRoute></StatusNumberCheckmarkInRoute>
          <EstWaitTime></EstWaitTime>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPickUpPage;