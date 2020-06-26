import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import './style.css'
import axios from 'axios'
// const bcrypt = require('bcryptjs');

export default class Login extends Component {

    
    async getCondition(){
        const test = await axios.get('/admin/login')
        console.log(test.data)
        return test.data
        // .then(res =>{
        //     console.log(res.data)
        //     this.setState({})
        // })
    }
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
    async submitForm(e){
        e.preventDefault()
        const {username,password} = this.state
        var condition = await this.getCondition()
        console.log(condition)
        
        if(condition){
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
