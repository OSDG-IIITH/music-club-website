import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class Lineup extends Component {
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        

        let loggedIn =true

        if(token==null)
        {
            loggedIn=false
        }

        this.state = {
            id:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
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
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="container">
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
