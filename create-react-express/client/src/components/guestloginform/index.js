import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class GuestLoginForm extends React.Component {
    render() {
      return (

        <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="text" name="password" id="password" placeholder="" />
        </FormGroup>
        </Form>

      );
    }
  }

export default GuestLoginForm;