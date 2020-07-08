import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class Lineup extends Component {
    
    state = {
        id:'',
        loggedIn : true,
        access_token : localStorage.getItem('access_token')
        
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        localStorage.setItem('event_id', this.state.id)
    }
    render() {
        if(!this.state.access_token){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="lineupContainer">
                    <h6 id="mes">*Enter event id to create a line up for the same</h6>

                        <form >

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="id">Event Id:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="id" name="id" value={this.state.id} onChange={this.onChange}  ></input>
                                </div>
                            </div>
                            <div class="row">
                                <Link to="/admin/add_lineup" >
                                <input type="submit" id="create1" value="Create Lineup" onClick={this.onSubmit}></input>
                                </Link>
                            </div>

                        </form>
                    </div>

            </div>      
        )
    }
}
