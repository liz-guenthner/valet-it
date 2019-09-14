import React from 'react';
import './style.css'

class TwoBubble extends React.Component {
    render() {
        return (
            <div className="bubble" id="twobubble">{this.props.children}</div>
        )
    }

}

export default TwoBubble;