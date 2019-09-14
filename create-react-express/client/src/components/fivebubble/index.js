import React from 'react';
import './style.css'

class FiveBubble extends React.Component {
    render() {
        return (
            <div className="bubble" id="fivebubble">{this.props.children}</div>
        )
    }

}

export default FiveBubble;