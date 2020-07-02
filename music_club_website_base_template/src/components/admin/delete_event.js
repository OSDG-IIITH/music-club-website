import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
import axios from 'axios'

export default class DeleteEvent extends Component {

    getFreshEvents = async () =>{
        const all_events = await axios.get('/landingPage/events')
        this.setState({freshEvents : all_events.data})
        
    }
    async componentDidMount(){
        this.getFreshEvents()
                
        
    }
    state = {
            id:'',
            loggedIn : true,
            freshEvents : [],
            access_token : localStorage.getItem('access_token')
        }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:Number(e.target.value)
        })
        console.log(this.state.id)
    }

    handleSubmit = async (e) =>{
        e.preventDefault()
        const success_message = await axios.post('/admin/delEvent' , {
            event_id : this.state.id,
            token : this.state.access_token
        })
        console.log(success_message.data)
        if(success_message.data === "TOKEN EXPIRED"){
            localStorage.removeItem('access_token')
            console.log('token expired login again')
           this.setState({loggedIn : false})
        }
        else{
            this.setState({id : ''})
            this.getFreshEvents()
        }
        
        
        
    }
    render() {
        console.log(this.state.freshEvents)
        if(!(this.state.access_token)){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">
                    <div class="container">
                    <h6 id="mes">*Enter id of respective event which you want to delete</h6>
                        <form onSubmit={this.handleSubmit}>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="id">Event Id:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="id" name="id" value={this.state.id} onChange={this.onChange}  ></input>
                                </div>
                            </div>                            

                            <div class="row">
                                <input type="submit" id="create" value="Delete"></input>
                            </div>

                        </form>

                        <div>
                            <table className = "table-responsive event_table">
                                <tr>
                                    <td>ID</td><td>Event Name</td><td>Time of Adding</td><td>Date of event</td>
                                </tr>
                                    {this.state.freshEvents.map(fe =>{
                                        return (
                                            <React.Fragment key={fe.id}>
                                            <tr>
                                                <td>{fe.id}</td><td>{fe.name}</td><td>{JSON.stringify(fe.db_time)}</td><td>{fe.date}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                
                            </table>
                        </div>
                    </div>
            </div>      
        )
    }
}
