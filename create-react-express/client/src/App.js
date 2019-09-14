import React, { Component } from "react";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import GuestLoginButton from "../src/components/guestloginbutton";
import GlobalSubmitButton from "../src/components/globalsubmitbutton";
import SeeQueueButton from "../src/components/seequeuebutton";
import AddCardButton from "../src/components/addcardbutton";
import PayButton from "../src/components/paybutton";
import PickUpButton from "../src/components/pickupbutton";
import PayNowButton from "../src/components/paynowbutton";
import ModalContainer from "../src/components/modalContainer";
import CreditCardForm from "../src/components/creditcardform";
import GuestLoginForm from "../src/components/guestloginform";
import HomeButton from "../src/components/homebutton";

class App extends Component {
  render() {
    return (
      <LoginCard>
      <LogoButton>logo</LogoButton>
      <HomeButton>Home</HomeButton>
      <GuestLoginForm><GlobalSubmitButton></GlobalSubmitButton></GuestLoginForm>
      <CreditCardForm><PayNowButton></PayNowButton></CreditCardForm>
      <SeeQueueButton>seequeue</SeeQueueButton>
      <AddCardButton>addcard</AddCardButton>
      <PayNowButton>paynowbutton</PayNowButton>
      <PickUpButton>pickupbutton</PickUpButton>
      <PayButton>paybutton</PayButton>
      <GuestLoginButton>guestloginbutton</GuestLoginButton>
      <ValetDriverButton>valetdriver</ValetDriverButton>
      <ModalContainer>modal</ModalContainer>
      </LoginCard>
    );
  }
}

export default App;
