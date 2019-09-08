import React from 'react';
import './style.css'

class Wrapper extends React.Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }

}

export default Wrapper;