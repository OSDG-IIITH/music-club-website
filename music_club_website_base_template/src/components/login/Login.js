import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
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


        /*
        localStorage.setItem("useet","uewvfihqevifvojqefvopebp546/*-+ewfievf")
        localStorage.setItem("passt","uewvfihqevifvojqefcfewrwvrv546/*-+ewfievf")
        


       


bcrypt.compare(username, '$2b$10$/vAq6f74Ye.Bqmgo7eo16eKfOGMrFpAh.OoyREteN58EHJpDX72li', function(err, res) {
    if(res) {
     // username natch
     localStorage.setItem("useet","uewvfihqevifvojqefvopebp546/*-+ewfievf")
        
    } else {
     // username don't match
     console.log("oops! wrong username");
    } 
  });

  bcrypt.compare(password, '$2b$10$ql4GTeUrH15KJZWkgxWmAu7IWrsqTC6Jwhxt2f/rVIOELjoT7BtL2', function(err, res) {
    if(res) {
     // Passwords natch
     localStorage.setItem("passt","uewvfihqevifvojqefvopebp546/*-+ewfievf")
        
    } else {
     // Passwords don't match
     console.log("oops! wrong password");
    } 
  });
        const useet = localStorage.getItem("useet")
        const passt = localStorage.getItem("passt")
*/
        if((username==="music@iiith" && password==="music")){
            localStorage.setItem("token","esrdcfyvubicuvidxcyrxuihbivvivjhcxkcjcgucuc@jgv5(&%jkb")
            this.setState({
                loggedIn: true
            })
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
                        <label for="username">Username </label><br/>
                        <input type="text" placeholder="Enter username" id="username" name="username" value={this.state.username} onChange={this.onChange} ></input><br/>
                        <label for="password">Password </label><br/>
                        <input type="password" placeholder="Enter password" id="password" name="password" value={this.state.password} onChange={this.onChange} ></input><br/>
                        <input type="submit" id="submit" value="Sign in" />
                    </form>
                </div>
            </div>           
        );
    }
}
