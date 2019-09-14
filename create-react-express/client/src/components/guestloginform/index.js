import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class GuestLoginForm extends React.Component {
    render() {
      return (

        <Form>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input type="text" name="firstname" id="firstname" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input type="text" name="lastname" id="lastname" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="licenseplate">License Plate</Label>
          <Input type="text" name="licenseplate" id="licenseplate" placeholder="" />
        </FormGroup>
        {this.props.children}
        </Form>

      );
    }
  }

export default GuestLoginForm;