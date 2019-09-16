import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

class GuestLoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        return (
            <div className="center-buttons guest-login-button-modal">
                <Button className="btn-lg btn-primary guest-login-button" onClick={this.toggle}>Guest Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Guest Login</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                <ModalFooter>
                  <Link to="/dashboard">
                    <Button className="btn-lg btn-primary guest-login-submit-button" onClick={this.toggle}>Submit</Button>
                  </Link>
                </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default GuestLoginButton;