import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './style.css'

class Admin extends Component {
    
    state = {
        
        access_token : localStorage.getItem('access_token'),
        loggedIn : true
    }
    
    render() {
        
        console.log('in admin.js the token is..')
        console.log(this.state.access_token)
        //this.setState({access_token : this.props.access_token})

        if(!(this.state.access_token)){
            console.log('token gone from admin ' , this.state.access_token)
            this.setState({loggedIn : false})
        }
       
         if(this.state.loggedIn === false)
         {
             console.log(this.state.loggedIn)
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
                        <Link id="create-event" to={{
                            pathname : '/admin/create_event',
                            state : {token : this.state.access_token}
                        }}>Create an event</Link><br/>
                        <Link id="update-event-state" to="/admin/change_event">Update event state</Link><br/>
                        <Link id="delete-event" to="/admin/delete_event">Delete an event</Link><br/>
                        <Link to="/admin/regs">View registrations</Link><br/>
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
                        <Link id="add-lineup" to="/admin/lineup">Add a lineup</Link><br/>
                    </div> 
                </div>
                <div></div>
                <div id="punk">
                    
                    <Link id="admin-button"  to="/logout">Logout from admin</Link><br/>
                    <Link id="admin-button" to="/admin/change_password">Change Password</Link><br/>
                </div>
                </div>
            </div>
        )
    }
}


export default Admin
