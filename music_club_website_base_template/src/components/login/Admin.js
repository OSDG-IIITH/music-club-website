import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'

export default class Admin extends Component {
    constructor(props)
    {
        super(props)
        const token = localStorage.getItem("token")
        

        let loggedIn =true

        if(token==null)
        {
            loggedIn=false
        }
        this.state={loggedIn}
    }
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div id="log">
                <h2 id="admin-topline">Welcome to admin page</h2>
                <Link id="admin-logout-button" to="/logout">logout</Link>
            </div>
        )
    }
}
