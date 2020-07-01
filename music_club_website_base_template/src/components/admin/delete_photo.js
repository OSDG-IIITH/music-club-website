import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
  

 export default class DeletePhoto extends Component {
    state = {
            photo_id:'',
            show : false,
            loggedIn : true,
            access_token : null
        }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit = (e) =>{
        //  return value of router delete_photo
        
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
                            <form action="admin/confirm_delete" >

                                <div class="row">
                                    <div class="col-25">
                                        <label id="label2" for="photo_id">Photo Id:</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="photo_id" name="photo_id" value={this.state.photo_id} onChange={this.onChange}  ></input>
                                    </div>
                                </div>                            

                                <div class="row">
                                    <input type="submit" id="create" value="Preview" onClick={this.onSubmit}></input>
                                </div>

                            </form>
                        </div>
                </div>      
            )
      
    }
}
