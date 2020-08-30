import React, { Component } from "react";
import HomePage from "./components/HomePage";
import HomePageNavbar from "./components/Navbar";
import { Container,Button } from "reactstrap";
import ExchangeTable from "./components/ExchangeTable";

class App extends Component {


  // getExchanges = async () => {
  //  await fetch('https://api.exchangeratesapi.io/latest?base=USD')
  //  .then(response => response.json())
  //  .then(result => this.setState({exchanges:result.rates}));
    
  // };
  // componentDidMount(){
  //   this.getExchanges();
  // }

  // componentDidUpdate(){
  //   this.getExchanges();
  // }

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
