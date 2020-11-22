import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
import axios from 'axios'

export default class Register extends Component {

    getFreshRegs = async () =>{
        const all_regs = await axios.get(`/landingPage/events/getRegs/${this.state.event_id}`)
        console.log(all_regs.data)
        this.setState({freshRegs : all_regs.data})
        
    }

    getFreshEvents = async () =>{
        const all_events = await axios.get('/landingPage/events')
        this.setState({freshEvents : all_events.data})
    }
    async componentDidMount(){
        this.getFreshEvents()
        //this.getFreshRegs()
                
        
    }
    state = {
            loggedIn : true,
            event_id : 1,
            freshRegs : [],
            freshEvents : [],
            access_token : localStorage.getItem('access_token')
        }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:Number(e.target.value)
        })
        console.log(this.state.event_id)
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(this.state.event_id)
        const success_message = await axios.post(`/admin/getRegs` , {
            token : this.state.access_token,
            id : this.state.event_id
        })
        console.log(success_message.data)
        if(success_message.data === "TOKEN EXPIRED"){
            localStorage.removeItem('access_token')
            console.log('token expired login again')
           this.setState({loggedIn : false})
        }
        else{
            console.log(success_message.data)
            this.setState({freshRegs : success_message.data})
        }
        
        
        
    }
    render() {
        console.log(this.state.freshRegs.length)
        if(!(this.state.access_token)){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">
                    <div class="deleteContainer container">
                    <h6 id="mes">*Enter id of respective event which you want the registrations of</h6>
                        <form onSubmit={this.handleSubmit}>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="id">Event Id:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="id" name="event_id" value={this.state.id} onChange={this.onChange}  ></input>
                                </div>
                            </div>                            

                            <div class="row">
                                <input type="submit" id="create" value="Show Reg."></input>
                            </div>

                        </form>

                         <div>
                             <h2>Latest events</h2>
                            <table className = "table-responsive event_table">
                                <tr>
                                    <td>ID</td><td>Event Name</td><td>State of event</td><td>Date of event</td>
                                </tr>
                                    {this.state.freshEvents.map(fe =>{
                                        return (
                                            <React.Fragment key={fe.id}>
                                            <tr>
                                                <td>{fe.id}</td><td>{fe.name}</td><td>{fe.state}</td><td>{fe.date}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                
                            </table>
                        </div>

                        <div>
                        <h2>Registrations</h2>
                            {this.state.freshRegs.length !== 0 ? (<table className = "table-responsive event_table">
                                <tr>
                                    <td>Reg-ID</td><td>Band Name</td><td>Instruments</td><td>Email</td><td>Phone no.</td><td>Song Names</td>
                                </tr>
                                    {this.state.freshRegs.map(fr =>{
                                        return (
                                            <React.Fragment key={fr.id}>
                                            <tr>
                                                <td>{fr.id}</td><td>{fr.band_name}</td><td>{fr.instrument_names}</td><td>{fr.email}</td><td>{fr.contact_number}</td><td>{fr.song_names}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                
                            </table>) : (<h2>Please enter correct event id</h2>)}
                        </div> 

                    </div>
            </div>      
        )
    }
}
