import React, { Component } from "react";
import "./App.css";
import LogoButton from "../src/components/logoButton";
import LoginCard from "../src/components/loginCard";
import ValetDriverButton from "../src/components/valetdriverbutton";
import CreditCardForm from "../src/components/creditcardform";

import SeeQueueButton from "../src/components/seequeuebutton";

import AddCardButton from "../src/components/addcardbutton";


import PayButton from "../src/components/paybutton";
import PickUpButton from "../src/components/pickupbutton";
import PayNowButton from "../src/components/paynowbutton";
import ModalContainer from "../src/components/modalContainer";


class App extends Component {
  render() {
    return (
      <LoginCard>
      <LogoButton>logo</LogoButton>
    

      <CreditCardForm></CreditCardForm>


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
