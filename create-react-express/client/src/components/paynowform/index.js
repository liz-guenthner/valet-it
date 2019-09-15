import React from 'react';
import './style.css';
import { Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class PayNowForm extends React.Component {
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

        <Form>
        <FormGroup>
            <div className="pay-now-text">Saved Card **** **** **** 0334</div>
            <Button className="btn-lg pay-now-button btn-primary">Pay Now</Button>
            <Button className="btn-lg add-new-button btn-primary" onClick={this.toggle}>Add New</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add New Card</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-lg btn-primary add-new-submit-button" onClick={this.toggle}>Pay Now</Button>
                </ModalFooter>
                </Modal>
        </FormGroup>
        </Form>

      );
    }
  }

export default PayNowForm;