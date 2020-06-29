import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class UpdateEvent extends Component {
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
            state:'',
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
                    <h6 id="mes">*Fill the following form to change event details </h6>

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
                                <div class="col-25">
                                    <label id="label2" for="state">Event State:</label>
                                </div>
                                <div class="col-75">
                                    <select id="state" name="state" value={this.state.state} onChange={this.onChange}>
                                        <option value="open" selected>open</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                        <option value="usa">USA</option>
                                        <option value="usa">USA</option>
                                    </select> 
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
                                <input type="submit" id="create" value="Update"></input>
                            </div>

                        </form>
                    </div>

            </div>      
        )
    }
}
