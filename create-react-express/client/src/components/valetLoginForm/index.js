import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class ValetLoginForm extends React.Component {
    render() {
      return (

        <Form>
        <FormGroup>
          <Label for="badgenumber">Badge Number</Label>
          <Input type="text" name="badgenumber" id="badgenumber" placeholder="" />
        </FormGroup>
        {this.props.children}
        </Form>

      );
    }
  }

export default ValetLoginForm;