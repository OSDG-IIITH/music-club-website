import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
  
//  change image src , event name , label as per db
// use confirm_delete router

 export default class ConfirmDelete extends Component {
    state = {
            photo_id:'',
            loggedIn : true,
            access_token : null
        }
    render() {
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
                <div class="ok">
                        <div class="container">
                        <h6 id="mes">*Press confirm to delete</h6>
                            <form >

                                <div class="pre">
                                   <div>
                                        <img id="prep" src={require('./No-Image-Found.png')}></img>   
                                   </div>
                                   <div id="dis">
                                        <div class="row">
                                            <div class="col-25">
                                                <label id="label2" for="name">Event Name:</label>
                                            </div>
                                            <div class="col-75">
                                                <label id="label3" name="name" >( event name from db)</label>                                            
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-25">
                                                <label id="label2" for="name">Image Label:</label>
                                            </div>
                                            <div class="col-75">
                                                <label id="label3" name="name" >( label from db)</label>                                            
                                            </div>
                                        </div>
                                   </div>
                                </div>                            

                                <div class="row">
                                    <input type="submit" id="create" value="Confirm"></input>
                                </div>

                            </form>
                        </div>
                </div>      
            )
    }
    
}
