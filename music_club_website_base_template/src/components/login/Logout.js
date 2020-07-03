import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem('access_token')
    }
    render() {
        return (
            <div id="log">
                <h2 id="logout-message">You have been logged out!!!</h2>
                <br/><Link id="logout-login" to="/login">Login Again</Link>
            </div>
        )
    }
}
