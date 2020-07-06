import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import './admin.css'
import axios from 'axios'

export default class CreateEvent extends Component {
    

    getFreshEvents = async () =>{
        const all_events = await axios.get('/landingPage/events')
        all_events.data.sort((a,b) =>{
            return -(a.db_time - b.db_time)
          })
        console.log(all_events.data)
        var lineupEvent = []
        for(let i = 0;i<all_events.data.length;i++){
            if(all_events.data[i].state === 'lineupAnnounced'){
                lineupEvent.push(all_events.data[i])
            }
        }

        if(lineupEvent.length){
            this.setState({lineupEvent : lineupEvent[0]})
        }
        
    }
    async componentDidMount(){
        this.getFreshEvents()
        
                
        
    }
    
        state = {
            lineupEvent : null,
            id:'',
            band_name:'',
            slot_given:'',
            slot_number:'',
            song_name:'',
            loggedIn : true,
            access_token : localStorage.getItem('access_token')
        }
       
        onChange = (e) =>{
            this.setState({
                [e.target.name] : e.target.value
            })
            console.log(this.state)
        }

        addLineup = (e) =>{
            e.preventDefault()
            const successMessage = axios.post()
        }
   
  
    render() {
        if(!(this.state.access_token)){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="lineupContainer container">
                    <h6 id="mes">*Fill the following form to add lineup for event by following instruction (if any)</h6>

                        <form onSubmit = {this.addLineup}>

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
                                    <label id="label2" for="band_name">Band Name:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="band_name"  name="band_name"  value={this.state.band_name} onChange={this.onChange} ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="slot_given">Slot (HH:MM - HH:MM  12hour):</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="slot_given" name="slot_given"  value={this.state.slot_given} onChange={this.onChange} ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="slot_number">Order:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="slot_number" name="slot_number" value={this.state.slot_number} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="song_name">Song Name(s):</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="song_name" name="song_name" value={this.state.song_name} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                           

                            <div class="row">
                                <button type="submit" id="create" value="Create">Create</button>
                            </div>

                        </form>

                        <h2>{this.state.lineupEvent ? this.state.lineupEvent[0].id : 'No event with open lineup yet'}</h2>
                    </div>

            </div>      
        )
    }
}
