import React from 'react';
import './style.css'

class GetMyCarButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-success">{this.props.children}</button>
        )
    }

}

export default GetMyCarButton;