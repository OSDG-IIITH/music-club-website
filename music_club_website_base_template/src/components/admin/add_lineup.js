import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class AddLineup extends Component {
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        
        

        let loggedIn =true

        if(token==null)
        {
            loggedIn=false
        }
        let eveid = 
        this.state = {
            id:eveid,
            band_name:'',
            slot_given:'',
            slot_number:'',
            song_name:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        // this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="container">
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
                                    <label id="label2" for="song_name">Song Name:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="song_name" name="song_name" value={this.state.song_name} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                           

                            <div class="row">
                                <input type="submit" id="create" value="Add"></input>
                            </div>
                            <div class="row">
                                <input type="submit" id="create" value="Finish"></input>
                            </div>

                        </form>
                    </div>

            </div>      
        )
    }
}
