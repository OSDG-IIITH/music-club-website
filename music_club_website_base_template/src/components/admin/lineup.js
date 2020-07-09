import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
 import axios from 'axios'

export default class Lineup extends Component {

    getLineupEvent = async () =>{
        const all_events = await axios.get('/landingPage/events')
        console.log(all_events.data)
        var lineupEvent = all_events.data.filter(ev =>{
            return ev.state === 'lineupAnnounced'
        })
        
        if(lineupEvent[0]){
            this.setState({lineupEvent : lineupEvent[0]})
        }
        
    }
    async componentDidMount(){
        this.getLineupEvent()
        
    }
    
    state = {
        id:'',
        loggedIn : true,
        access_token : localStorage.getItem('access_token'),
        lineupEvent : null,
        redirect : null
        
    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('event_id', this.state.id)
        console.log('event_id in local storage set')
        this.setState({redirect : "/admin/add_lineup"})
    }
    render() {
        if(this.state.redirect){
            console.log('gonna redirect now')
            return <Redirect to = {this.state.redirect}/>
        }
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

                        <form onSubmit = {this.onSubmit}>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="id">Event Id:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="id" name="id" value={this.state.id} onChange={this.onChange}  ></input>
                                </div>
                            </div>
                            <div class="row">
                                <input type="submit" id="create1" value="Create Lineup" ></input>
                            </div>

                        </form>

                        {this.state.lineupEvent ? (
                            <div>
                            <h2>The following event has its lineup open : </h2>
                                <ul>
                                    <li>Event ID : {this.state.lineupEvent.id}</li>
                                    <li>Event Name : {this.state.lineupEvent.name}</li>
                                    <li>Event Date : {this.state.lineupEvent.date}</li>
                                    <li>Event time : {this.state.lineupEvent.time}</li>
                                </ul>

                                </div>
                            
                        ) : (
                            <h2 className="text-center">No events have their lineup currently announced!</h2>
                        )}
                    </div>

            </div>      
        )
    }
}
