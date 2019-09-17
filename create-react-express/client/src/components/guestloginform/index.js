import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FormErrors } from '../FormErrors';
import { Link } from "react-router-dom";


class GuestLoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: {username: '', password: ''},
      usernameValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.username = usernameValid ? '' : ' can only be letters';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

    render() {
      return (

        <Form onKeyPress={this.onKeyPress}>
        <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder=""
          value={this.state.username}
          onChange={this.handleUserInput}
          />
        </FormGroup>
        <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder=""
          value={this.state.password}
          onChange={this.handleUserInput}
          />
        </FormGroup>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Link to="/dashboard">
          <Button className="btn-lg btn-primary guest-login-submit-button" 
          disabled={!this.state.formValid}
          >Submit</Button>
        </Link>
        </Form>

      );
    }
  }

export default GuestLoginForm;