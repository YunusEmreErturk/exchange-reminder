import React, { Component } from "react";
import HomePage from "./components/HomePage";
import HomePageNavbar from "./components/Navbar";
import { Container } from "reactstrap";

class App extends Component {
  state = {
    exchanges: [],
  };

  getExchanges = async () => {
   await fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(result => this.setState({exchanges:result}));
    console.log(this.state.exchanges);
    
  };
  componentDidMount(){
    this.getExchanges();
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
