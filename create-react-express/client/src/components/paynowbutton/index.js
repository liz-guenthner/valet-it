import React from 'react';
import './style.css'

class PayNowButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-primary btn-lg">{this.props.children}</button>
        )
    }

}

export default PayNowButton;