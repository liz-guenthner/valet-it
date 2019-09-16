import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";


class ValetParkForm extends React.Component {
    render() {
      return (
             <Form>
                <FormGroup className="width48 float-left">
                <Label for="spot">Spot</Label>
                <Input type="text" name="spot" id="spot" placeholder="" />
                <Label for="makemodel">Make/Model</Label>
                <Input type="text" name="makemodel" id="makemodel" placeholder="" />
                </FormGroup>

                <FormGroup className="width48 float-right">
                <Label for="licenseplate">License Plate</Label>
                <Input type="text" name="licenseplate" id="licenseplate" placeholder="" />
                <Label for="color">Color</Label>
                <Input type="text" name="color" id="color" placeholder="" />
                </FormGroup>

                <FormGroup className="full-width">
                <Label for="notes">Notes</Label>
                <Input type="textarea" name="notes" id="notes" placeholder="" />
                </FormGroup>
                <Link className="full-width form-group" to="/valet-homepage">
                    <Button className="btn-lg btn-primary" id="parked-button">Parked</Button>
                </Link>
            </Form>
      );
    }
  }

export default ValetParkForm;