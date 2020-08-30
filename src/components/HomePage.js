import React, { Component } from "react";
import {
  Container,
  Input,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
  Table,
  Form,
} from "reactstrap";
import axios from "axios";
export default class home extends Component {
  // async componentDidMount() {
  //   console.log(this.props.exchanges);
  // }

  state = {
    exchangeType: "",
    personalRate: "",
    increaseOrDecrease: "",
  };

  onChangHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();
    // fetch('http://localhost:3000/api/add_rate',
    // {
    //   method:'POST',
    //   headers:{
    //     'Accept':'application/json',
    //     'Content-Type':'application/json'
    //   },
    //   body:JSON.stringify({
    //
    //   })
    // })
    var data = {
      increaseOrDecrease: this.state.increaseOrDecrease,
      personalRate: this.state.personalRate,
      exchangeType: this.state.exchangeType,
    };
    console.log("wow");
    var url = "https://localhost:44343/api/exchange/create_exchange";
    await axios
      .post(url, data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
    console.log("deneene");
    console.log("deneene");
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="exchangeType">Exchange Type</Label>
            <Input
              type="select"
              name="exchangeType"
              id="exchangeType"
              onChange={this.onChangHandler}
            >
              <option>USD</option>
              <option>EURO</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="personalRate">My Rate</Label>
            <Input
              type="number"
              name="personalRate"
              id="personalRate"
              placeholder="Your rate"
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="increaseOrDecrease">Increase-Decrease</Label>
            <Input
              type="number"
              name="increaseOrDecrease"
              id="increaseOrDecrease"
              placeholder="Incerase or Decrease "
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <Button color="info" type="submit">
            Kaydet
          </Button>
        </Form>
      </Container>
    );
  }
}
