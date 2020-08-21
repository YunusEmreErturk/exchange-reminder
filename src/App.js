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

  getExchanges = (exchangeType) => {
  
    
  };
  async componentDidMount(exchangeType){
    if(!exchangeType){
      exchangeType = "USD";
    }
    const a = await fetch('https://api.exchangeratesapi.io/latest?base='+ exchangeType);
    const b = await a.json();
    this.setState({exchanges:Object.entries(b.rates)});
    console.log(this.state.exchanges);
  }
  render() {
    return (
      <Container className="mt-4">
        <HomePageNavbar />
        <HomePage exchanges={this.state.exchanges} />
      </Container>
    );
  }
}

export default App;
