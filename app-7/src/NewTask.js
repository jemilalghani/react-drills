import React, { Component } from 'react';

class NewTask extends Component {
    constructor(){
        super();
        this.state={
            newTask:'',
        }
    this.handleChange=this.handleChange.bind(this);
    this.handleUpdateList=this.handleUpdateList.bind(this);
    }
    handleChange(event){
        this.setState({
            newTask:event.target.value,
        })
    }
    handleUpdateList(task){
        this.props.add(this.state.newTask);
        this.setState({newTask:''});
    }
    render(){
        return(
            <div>
                <input value={this.state.newTask} onChange={this.handleChange}/>
                <button onClick={this.handleUpdateList}>Add</button>
            </div>
        )
    }
}
export default NewTask;