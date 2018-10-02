import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      list:[],
    }
this.updateList=this.updateList.bind(this);
  }
  updateList(task){
    this.setState({
      list:[...this.state.list, task ],
      userTasks:''
    })
  }
  render() {
    return (
      <div className="App">
      <NewTask add={this.updateList}/>
      <List list={this.state.list} />
      <Todo />
      </div>
    );
  }
}

export default App;
