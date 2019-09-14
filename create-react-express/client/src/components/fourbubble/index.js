import React from 'react';
import './style.css'

class FourBubble extends React.Component {
    render() {
        return (
            <div className="bubble" id="fourbubble">{this.props.children}</div>
        )
    }

}

export default FourBubble;