import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Components/Accordion';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading" >Nguyen huu tien </Accordion>
      </div>
    );
  }
}

export default App;
