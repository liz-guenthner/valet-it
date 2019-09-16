import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { Button, Table } from 'reactstrap';

class GuestQueueForm extends React.Component {
    render() {
      return (
        <div className="guest-queue-container">
          <div className="guest-queue-table">
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Spot</th>
                <th>License</th>
                <th>Color/Make/Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>139</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>110</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr id="pickup-guest">
                <td scope="row">3</td>
                <td>99</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>139</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>110</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>110</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">7</td>
                <td>99</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
              <tr>
                <td scope="row">8</td>
                <td>139</td>
                <td>D78DD66</td>
                <td>Red/Ford/F-150</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <Link to="/valet-homepage" >
              <Button className="btn-lg btn-primary" id="inroute-button" onClick={this.toggle}>In Route</Button>
          </Link>
        </div>
      </div>
      );
    }
  }

export default GuestQueueForm;