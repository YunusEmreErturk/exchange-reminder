import React, { Component } from "react";
import { Table } from "reactstrap";

class ExchangeTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Exchange Type</th>
              <th>Rates</th>
            </tr>
          </thead>
          <tbody>
            {this.props.exchanges.map((exchange,index) =>(
              <tr key={index +1}>
              <td>{index+1}</td>
              <td>{exchange[0]}</td>
            <td>{exchange[1]}</td>
            </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ExchangeTable;
