import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './style.css'
// const bcrypt = require('bcryptjs');

export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn=false
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username,password} = this.state
        
        if(/* need return value here */){
            localStorage.setItem("token","esrdcfyvubicuvidxcyrxuihbivvivjhcxkcjcgucuc@jgv5(&%jkb")
            this.setState({
                loggedIn: true
            })
        }
        else
        {
            alert("Oops! You have entered wrong username or password.");
            window.location.reload();
        }
    }
    render() {
            if(this.state.loggedIn)
            {
                return <Redirect to="/admin"/>
            }
        return (
            <div id="log">
                <div id="content-box">
                    <h2 id="welcome">Welcome back!</h2>
                    <h4 id="ent">Admin login here</h4>
                    <form id="login" onSubmit={this.submitForm}>
                        <label id="loglabel1" for="adminusername">Username </label>
                        <input type="text" placeholder="Enter username" id="adminusername" name="username" value={this.state.username} onChange={this.onChange} ></input><br/>
                        <label id="loglabel2" for="adminpassword">Password </label>
                        <input type="password" placeholder="Enter password" id="adminpassword" name="password" value={this.state.password} onChange={this.onChange} ></input><br/>
                        <input type="submit" id="login-submit" value="Sign in" />
                    </form>
                </div>
            </div>           
        );
    }
}
