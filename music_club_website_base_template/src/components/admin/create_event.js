import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class CreateEvent extends Component {
    constructor(props){
        super(props)

        const token = localStorage.getItem("token")
        

        let loggedIn =true

        if(token==null)
        {
            loggedIn=false
        }

        this.state = {
            name:'',
            description:'',
            date:'',
            time:'',
            venue:'',
            state:'',
            poster:'',
            gallery_link:'',
            ping_link:'',
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
                    <h6 id="mes">*Fill the following form to create an event by following instruction (if any)</h6>

                        <form >

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="name">Event Name:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="description">Description:</label>
                                </div>
                                <div class="col-75">
                                    <textarea type="text" id="description"  name="description"  value={this.state.description} onChange={this.onChange} ></textarea>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="date">Date(DD-MM-YYYY):</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="date" name="date"  value={this.state.date} onChange={this.onChange} ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="time">Time(HH:MM 12hour):</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="time" name="time" value={this.state.time} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="venue">Venue:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="venue" name="venue" value={this.state.venue} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="state">Event State:</label>
                                </div>
                                <div class="col-75">
                                    <select id="state" name="state" value={this.state.state} onChange={this.onChange}>
                                        <option value="upcoming" selected>Upcoming</option>
                                        <option value="completed">Completed</option>
                                        <option value="regOpen">Registration Open</option>
                                        <option value="regClosed">Registration Closed</option>
                                        <option value="lineupAnnounced">Lineup Announced</option>
                                    </select> 
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="poster">Poster:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="poster" name="poster" value={this.state.poster} onChange={this.onChange}  ></input>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="gallery_link">Gallery Link:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="gallery_link" name="gallery_link" value={this.state.gallery_link} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label id="label2" for="ping_link">Ping Link:</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="ping_link" name="ping_link" value={this.state.ping_link} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" id="create" value="Create"></input>
                            </div>

                        </form>
                    </div>

            </div>      
        )
    }
}
