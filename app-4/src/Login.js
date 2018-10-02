import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    this.updateLogin=this.updateLogin.bind(this);
    this.sendAlert=this.sendAlert.bind(this);
    }
    updateLogin(key,element){
        this.setState({
            [key]:element
        })
    }
    sendAlert(){
        alert(`Username:${this.state.username}, Password:${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input onChange={e=>this.updateLogin('username',e.target.value)}/>
                <input onChange={e=>this.updateLogin('password',e.target.value)}/>
                <button onClick={this.sendAlert}>Login</button>
            </div>
        )
    }
}