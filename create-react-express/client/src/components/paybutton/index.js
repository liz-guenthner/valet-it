import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class PayButton extends React.Component {
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
            <div className="center-buttons pay-button-modal">
                <Button className="btn-lg pay-button btn-primary" onClick={this.toggle}>Pay</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Submit payment</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                {/* <ModalFooter>
                    <Button className="btn-lg btn-primary pay-submit-button" onClick={this.toggle}>Submit</Button>
                </ModalFooter> */}
                </Modal>
            </div>
        )
    }

}

export default PayButton;