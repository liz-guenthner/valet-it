import React from 'react';
import './style.css'

class OneBubble extends React.Component {
    render() {
        return (
            <div className="bubble" id="onebubble">{this.props.children}</div>
        )
    }

}

export default OneBubble;