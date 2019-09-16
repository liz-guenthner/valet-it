import React from 'react';
import './style.css';
import { Table } from 'reactstrap';


class GuestQueue extends React.Component {
    render() {
      return (

        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Spot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>139</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>110</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>99</td>
          </tr>
        </tbody>
      </Table>

      );
    }
  }

export default GuestQueue;