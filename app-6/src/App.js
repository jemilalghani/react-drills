import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state={
      userInput:'',
      list:['eat','sleep'],
    }
  this.handleChange=this.handleChange.bind(this);
  this.updateList=this.updateList.bind(this);
  }
  handleChange(val){
    this.setState({
      userInput:val,
    })
  }
 
  updateList(userInput){
    this.setState({
      list:[...this.state.list, this.state.userInput ],
      userInput:''
    })
  }
  render() {
    let todoList = this.state.list.map((element,index)=>{
      return (
        <Todo key={index} task={element}></Todo>
      )
    })
    return (
      <div className="App">
        <h1>Things to-do:</h1>
        <input value={this.state.userInput} onChange={e=>this.handleChange(e.target.value)}/>
        <button onClick={this.updateList}>Add</button>
        {todoList}
      </div>
    );
  }
}

export default App;
