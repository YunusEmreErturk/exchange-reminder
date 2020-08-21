import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Container } from "reactstrap";

class App extends Component  {
  render() {
    return (
      <Container className="mt-4">
        <HomePage/>
      </Container>
    );
  }
}

export default App;
