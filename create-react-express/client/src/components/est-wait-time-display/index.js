import React from 'react';
import './style.css';


class EstWaitTimeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          estWaitTime: '00:00',
          cars: 'XX'
        };
    }
    render() {
      return (

        <div className="est-wait-time-display">
            <div className="est-wait-time">
                {this.state.estWaitTime}
            </div>
            <div className="est-wait-time-message">
                {this.state.cars} cars ahead of you
            </div>
        </div>

      );
    }
  }

export default EstWaitTimeDisplay;