import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
import axios from 'axios'

class AddPhoto extends Component {

    state = {
        savedMessage : '',
        loggedIn : true,
        access_token : localStorage.getItem('access_token')
    }

    formRef = React.createRef()

    handleSubmit = async (e) =>{
       e.preventDefault()
       console.log(e.target)
       var formData  = new FormData(e.target)
       const headers = {
        'Content-Type' : 'application/multipart/form-data'
     }

     formData.append('token' , this.state.access_token)
       const successMessage = await fetch('/admin/addPhoto' , {
           method : 'POST',
           body : formData
       } , {headers : headers})

       const responseMessage = await successMessage.json()
       if(responseMessage === "TOKEN EXPIRED"){
        localStorage.removeItem('access_token')
        console.log('token expired login again')
       this.setState({loggedIn : false})
    }
    else{

        this.formRef.current.reset()
        this.setState({savedMessage : 'Photo Saved'})
        setTimeout(() =>{
            this.setState({savedMessage : ''})
        } , 2000)
    }
       console.log(responseMessage)
       

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
                    <div class="addPhotoContainer container">
                    <h6 id="mes">Upload an image to the database(providing a label is required)</h6>
                        <form ref={this.formRef} onSubmit={this.handleSubmit}  encType='multipart/form-data' method='post'>

                        <input  name='img_files' type="file" multiple required/>
                        <br/>
                        <br/>
                        <br/>

                        <label htmlFor = 'label'>Label</label>
                        <br/>
                        <input name="photoLabel" type="text" required/>
                       
                        
                        <input type="submit"/>
                        <br/>
                        {this.state.savedMessage}

                        </form>

                        
                    </div>
            </div>      
        )
    }
}

export default AddPhoto