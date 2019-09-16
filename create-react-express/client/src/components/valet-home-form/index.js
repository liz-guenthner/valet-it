import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";


class ValetHomeForm extends React.Component {
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
                <Link to="/valet-park">
                    <Button className="btn-lg btn-primary">Log Guest</Button>
                </Link>
                <Link to="/valet-guest-queue">
                    <Button className="btn-lg btn-primary">See Queue</Button>
                </Link>
            </Form>
      );
    }
  }

export default ValetHomeForm;