import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div id="log">
                <h1 id="logout-message">you have been logged out!!!</h1>
                <Link id="logout-login" to="/login">Login Again</Link>
            </div>
        )
    }
}
