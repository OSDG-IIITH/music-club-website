import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
import axios from 'axios'

export default class UpdateEvent extends Component {

    getFreshEvents = async () =>{
        const all_events = await axios.get('/landingPage/events')
        this.setState({freshEvents : all_events.data})
    }

    async componentDidMount(){
        this.getFreshEvents()
    }
    
    state = {
            id:null,
            state:null,
            gallery_link:null,
            ping_link:null,
            loggedIn : true,
            access_token : localStorage.getItem('access_token'),
            freshEvents : [],
            stateEnable : false,
            galEnable : false,
            pingEnable : false
        }

        galRef = React.createRef()
        pingRef = React.createRef()

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }

    updateEvent = async (e) =>{
        e.preventDefault()
        const successMessage = await axios.put('/admin/updateState' , {

            updated_event : {
                id : this.state.id,
                state : this.state.state ? this.state.state : '',
                gallery_link : this.state.gallery_link ? this.state.gallery_link : '',
                ping_link : this.state.ping_link ? this.state.ping_link : ''
            },
            token : this.state.access_token
            
        })
        console.log(successMessage.data)
        if(successMessage.data === "TOKEN EXPIRED"){
            localStorage.removeItem('access_token')
            console.log('token is gone now login again')
            this.setState({loggedIn : false})
        }
        else{
            this.setState({id : '' , state : null , gallery_link : null , ping_link : null , stateEnable : false , galEnable : false , pingEnable : false})
            this.getFreshEvents()
        } 
    }
  
    render() {
        console.log(this.state.freshEvents)
        console.log(this.state.state)

        if(!(this.state.access_token)){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="container updateContainer">
                    <h6 id="mes">*Fill the following form to change event details </h6>

                        <form onSubmit = {this.updateEvent}>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="id">Event Id:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="id" name="id" value={this.state.id} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="state">Event State:</label>
                                </div>
                                <div class="col-75">
                                    <select disabled={!this.state.stateEnable} id="state" name="state"   onChange={this.onChange}>
                                        <option disabled selected value = ""> -- select a state -- </option>
                                        <option value="upcoming">Upcoming</option>
                                        <option value="completed">Completed</option>
                                        <option value="regOpen">Registration Open</option>
                                        <option value="regClosed">Registration Closed</option>
                                        <option value="lineupAnnounced">Lineup Announced</option>
                                    </select>
                                    <button onClick = {(e) => {e.preventDefault();this.setState({stateEnable : true})}}>Change state</button>
                                    {this.state.stateEnable ? (<button onClick = {(e) => {e.preventDefault();this.setState({stateEnable : false , state:null})}}>Cancel</button>) : ''} 
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="gallery_link">Gallery Link:</label>
                                </div>
                                <div class="col-75">
                                    <input ref={this.galRef} disabled={!this.state.galEnable} type="text" id="gallery_link" name="gallery_link" value={this.state.gallery_link} onChange={this.onChange}  ></input>
                                    <button onClick = {(e) => {e.preventDefault();this.setState({galEnable : true})}}>Change gallery link</button>
                                    {this.state.galEnable ? (<button onClick = {(e) => {e.preventDefault();this.setState({galEnable : false , gallery_link:null});this.galRef.current.value = ''}}>Cancel</button>) : ''}
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="ping_link">Ping Link:</label>
                                </div>
                                <div class="col-75">
                                    <input ref={this.pingRef} disabled={!this.state.pingEnable} type="text" id="ping_link" name="ping_link" value={this.state.ping_link} onChange={this.onChange}  ></input>
                                    <button onClick = {(e) => {e.preventDefault();this.setState({pingEnable : true})}}>Change ping link</button>
                                    {this.state.pingEnable ? (<button onClick = {(e) => {e.preventDefault();this.setState({pingEnable : false , ping_link:null});this.pingRef.current.value = ''}}>Cancel</button>) : ''}
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" id="create" value="Update"></input>
                            </div>

                        </form>

                        <div>
                            <table className = "table-responsive event_table">
                            <tbody>
                                <tr>
                                    <td>ID</td><td>Event Name</td><td>Time of Adding</td><td>State of Event</td>
                                </tr>
                                    {this.state.freshEvents.map(fe =>{
                                        return (
                                            <React.Fragment key={fe.id}>
                                            <tr>
                                                <td>{fe.id}</td><td>{fe.name}</td><td>{JSON.stringify(fe.db_time)}</td><td>{fe.state}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                    </tbody>
                                
                            </table>

                            </div>
                    </div>

            </div>      
        )
    }
}
