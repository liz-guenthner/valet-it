import React from 'react';
import './style.css';

class StatusNumberCheckmark extends React.Component {
    render() {
        return (
            <div className="status-container">
                <div className="status-block">
                    <div className="status-number-checkmark">
                        <div id="parked">1</div>
                        <span className="status-text">Parked</span>
                    </div>
                </div>
                <div className="status-block">
                    <div className="status-number-checkmark">
                        <div id="paid">2</div>
                        <span className="status-text">Paid</span>
                    </div>
                </div>
                <div className="status-block">
                    <div className="status-number-checkmark">
                        <div id="inroute">3</div>
                        <span className="status-text">In Route</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default StatusNumberCheckmark;