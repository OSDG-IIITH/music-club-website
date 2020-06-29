import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'

export default class DeleteEvent extends Component {
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
                    <h6 id="mes">*Enter id of respective event which you want to delete</h6>
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
                                <input type="submit" id="create" value="Delete"></input>
                            </div>

                        </form>
                    </div>
            </div>      
        )
    }
}
