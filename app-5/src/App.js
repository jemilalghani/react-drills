import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      url:"https://http.cat/405",
    }
   
  }
  render() {
    return (
      <div className="App">
        <Image view={this.state.url}/>
      </div>
    );
  }
}

export default App;
