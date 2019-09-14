import React from 'react';
import './style.css';


class CreditCardForm extends React.Component {
    render() {
      return (
        <form>
        
          <label for="cc">CC#</label>
          <input
            type="text"
            id="cc"
            value="xxxx xxxx xxxx xxxx"
            />
           <label for="exp">EXP</label>
          <input
            type="text"
            id="exp"
            value="xxxx"
            />
            <label for="ccv">CCV</label>
          <input
            type="text"
            id="ccv"
            value="xxx"
            />
            {this.props.children}
        </form>

      );
    }
  }

export default CreditCardForm;