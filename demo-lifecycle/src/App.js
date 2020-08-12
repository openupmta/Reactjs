import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LifeCycle from './Components/LifeCycle';
class App extends Component {
  constructor(){
    super();
    this.state = {
      showCounter: true
    }
    this.removeShow= this.removeShow.bind(this);
  }
  removeShow(){
    this.setState({
      showCounter: !this.state.showCounter
    })
  }
  render() {
    console.log("App render");
    return (
      <div className="App">
        <button onClick={this.removeShow}>Remove counter</button>
        {this.state.showCounter && <LifeCycle /> }
      </div>
    );
  }
}

export default App;
