import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import './style.css'

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
            <div id="ok">

                    <h3 id="admin-topline">Welcome to admin page</h3>
                <div id="pun">
                    <div id="content-box-1">
                        <h3>Events</h3>
                    </div>
                    <div id="content-box-2">
                        <Link id="create-event" to="/admin/create_event">Create an event</Link><br/>
                        <Link id="update-event-state" to="/admin/change_state">Update event state</Link><br/>
                        <Link id="delete-event" to="/admin/delete_event">Delete an event</Link><br/>
                    </div>
                </div>
                <div id="pun">
                    <div id="content-box-1">
                        <h3>Photos</h3>
                    </div>
                    <div id="content-box-2">
                        <Link id="add-photo" to="/admin/add_photo">Add an image to database </Link><br/>
                        <Link id="delete-photo" to="/admin/delete_photo">Remove an image from database</Link><br/>
                    </div>  
                </div>
                <div id="pun">
                    <div id="content-box-1">
                        <h3>Lineup</h3>
                    </div>
                    <div id="content-box-2">
                        <Link id="add-lineup" to="/admin/add_lineup">Add a lineup</Link><br/>
                    </div> 
                </div>
                <div></div>
                <div id="punk">
                    
                    <Link id="admin-button"  to="/logout">Logout from admin</Link><br/>
                    <Link id="admin-button" to="/admin/create_event">Change Password</Link><br/>
                </div>
                </div>
            </div>
        )
    }
}
