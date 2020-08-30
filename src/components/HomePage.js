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
    exchange_type: "",
    my_rate: "",
    increase_decrease: "",
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
      user_name: "Test",
      exchangeType: this.state.increase_decrease,
      myRate: this.state.my_rate,
    };
    console.log("wow");
    var url = "https://localhost:44388/api/app/register";
    await axios
      .post(url, data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
      console.log("deneene");
      console.log("deneene");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="exchange_type">Exchange Type</Label>
            <Input
              type="select"
              name="exchange_type"
              id="exchange_type"
              onChange={this.onChangHandler}
            >
              <option>USD</option>
              <option>EURO</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="my_rate">My Rate</Label>
            <Input
              type="number"
              name="my_rate"
              id="my_rate"
              placeholder="Your rate"
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="increase_decrease">Increase-Decrease</Label>
            <Input
              type="number"
              name="increase_decrease"
              id="increase_decrease"
              placeholder="Incerase or Decrease "
              onChange={this.onChangHandler}
            ></Input>
          </FormGroup>
          <Button color="info" type="submit">
            Kaydet
          </Button>
        </Form>
      </div>
    );
  }
}
