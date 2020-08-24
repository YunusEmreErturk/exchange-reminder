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
  componentDidMount(exchangeType){
    if(!exchangeType){
      exchangeType = "usd";
    }
   fetch('http://localhost:3000/api/latest_rates')
   .then(response => response.json())
   .then(result => this.setState({exchanges:result}));
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
