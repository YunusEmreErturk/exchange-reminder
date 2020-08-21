import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import HomePageNavbar from "./components/Navbar";
import { Container } from "reactstrap";

class App extends Component {
  state = {
    exchanges: [],
  };

  getExchanges = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => this.setState({ exchanges: result }));
  };
  componentDidMount(){
    this.getExchanges();
  }
  render() {
    return (
      <Container className="mt-4">
        <HomePageNavbar />
        <HomePage />
      </Container>
    );
  }
}

export default App;
