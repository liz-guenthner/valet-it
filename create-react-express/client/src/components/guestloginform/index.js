import React from 'react';
import './style.css'

class GuestLoginForm extends React.Component {
    render() {
      return (
        <form>
        
          <label for="firstname">First Name</label>
          <input
            type="text"
            id="firstname"         
            />
           <label for="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"          
            />
            <label for="licenseplate">License Plate</label>
          <input
            type="text"
            id="licenseplate"           
            />
             
        </form>
      );
    }
  }

export default GuestLoginForm;