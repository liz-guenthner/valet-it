import React from 'react';
import './style.css'

class ThreeBubble extends React.Component {
    render() {
        return (
            <div className="bubble" id="threebubble">{this.props.children}</div>
        )
    }

}

export default ThreeBubble;