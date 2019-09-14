import React, { Component } from "react";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import GuestLogin from "../src/components/guestlogin";
import GlobalSubmitButton from "../src/components/globalsubmitbutton";

import SeeQueueButton from "../src/components/seequeuebutton";

import AddCardButton from "../src/components/addcardbutton";


import PayButton from "../src/components/paybutton";
import PickUpButton from "../src/components/pickupbutton";
import PayNowButton from "../src/components/paynowbutton";
import ModalContainer from "../src/components/modalContainer";
import GuestForm from "../src/components/guestform";

class App extends Component {
  render() {
    return (
      <LoginCard>
      <LogoButton>logo</LogoButton>
      <GlobalSubmitButton>submit</GlobalSubmitButton>

      <GuestForm>Guest</GuestForm>


      <SeeQueueButton>seequeue</SeeQueueButton>



      <AddCardButton>addcard</AddCardButton>

      <PayNowButton>paynowbutton</PayNowButton>
      <PickUpButton>pickupbutton</PickUpButton>
      <PayButton>paybutton</PayButton>





      <GuestLogin>guestlogin</GuestLogin>
      <ValetDriverButton>valetdriver</ValetDriverButton>
      <ModalContainer>modal</ModalContainer>
      </LoginCard>
    );
  }
}

export default App;
