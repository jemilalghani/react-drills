import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      userChoice:'',
      foods:['spaghetti', 'ice cream', 'sushi','bologna','cheese'],
    }
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event){
    this.setState({
      userChoice:event.target.value
    })
  }
  render() {
    let foodToDisplay = this.state.foods.filter((element,index)=>{return element.includes(this.state.userChoice)}).map((element,index)=>{
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
       <input value={this.userChoice} onChange={this.handleChange} />
       {foodToDisplay}
      </div>
    );
  }
}

export default App;
