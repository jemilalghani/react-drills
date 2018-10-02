import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      userInput:''
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      userInput:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input value={this.userInput} onChange={this.handleChange}/>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;

