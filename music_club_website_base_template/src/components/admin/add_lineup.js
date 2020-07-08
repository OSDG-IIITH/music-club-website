import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import './admin.css'
import axios from 'axios'


export default class AddLineup extends Component {

        state = {
            id:localStorage.getItem("event_id"),
            band_name:'',
            slot_given:'',
            slot_number:'',
            song_name:'',
            loggedIn : true,
            access_token : localStorage.getItem('access_token')
        }
    
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onFinish=(e)=>{
        localStorage.removeItem('event_id')
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

                    <div class="lineupContainer">
                    <h6 id="mes">*Fill the following form to add lineup for event by following instruction (if any)</h6>

                        <form >

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

                                <input type="submit" id="create" value="Add"></input>
                            </div>
                            <div class="row">
                                <input type="submit" id="create2" onClick={this.onFinish} value="Finish"></input>

                            </div>

                        </form>

                        <h2>{this.state.lineupEvent ? this.state.lineupEvent[0].id : 'No event with open lineup yet'}</h2>
                    </div>

            </div>      
        )
    }
}
