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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </Container>
      </div>
    );
  }
}
