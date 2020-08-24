import React, { Component } from "react";
import {
  Container,
  Input,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
  Table
} from "reactstrap";
export default class home extends Component {
    async componentDidMount(){
        console.log(this.props.exchanges)
    }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-md-6">
              <FormGroup>
                <Label for="exampleSelect">Exchange Type</Label>
                <Input type="select" name="select">
                  <option>USD</option>
                  <option>EURO</option>
                  <option>GOLD</option>
                  <option>PLATIN</option>
                </Input>
              </FormGroup>
            </Col>
            <Col className="col-md-6">
              <FormGroup>
                <Label for="exampleSelect">My Rate</Label>
                <Input type="text" name="text" id="exampleSelect"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6">
              <FormGroup>
                <Input type="text" name="text" id="exampleSelect"></Input>
              </FormGroup>
            </Col>
            <Col className="col-md-6">
              <Button block> Submit</Button>
            </Col>
          </Row>
          <Table style={{marginTop:"50px"}} striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Exchange Type</th>
          <th>Buy</th>
          <th>Sale</th>
        </tr>
      </thead>
      <tbody>
          {this.props.exchanges.map((exchange,index) =>(
              <tr key={index}>
              <th scope="row">{index}</th>
              <td>{exchange[0]}</td>
              <td>{exchange[1].Alış}</td>
              <td>{exchange[1].Satış}</td>
            </tr>
          ))
          }
        
      </tbody>
    </Table>
        </Container>
      </div>
    );
  }
}
