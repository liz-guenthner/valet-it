//---------------------------------------------------------------------------------



import React, { Component } from "react";  // for using "class...extends..."
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {

    let value = event.target.value;  // value input's by user
    const name = event.target.name;  // naming of key

    if (name === "password") {  //?
      value = value.substring(0, 15);
    }
    // let value user inputs associate with its name @ the location in browswer
    this.setState({
      [name]: value
    });
  };

  // codes block when "submit" button pressed
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({  // clearing input fields
      firstName: "",
      lastName: "",
      password: ""
    });
  };
//---------------------------------------------------------------------------------
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}  // state-value
            name="firstName"
            onChange={this.handleInputChange}  // to-do funct when changes
            type="text"
            placeholder="First Name"           // shadows texts in input field
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
