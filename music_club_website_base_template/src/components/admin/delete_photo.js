import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
 import './admin.css'
import axios from 'axios'
  
let urls = new WeakMap()

let getBlobUrl = (blob) =>{
    if(urls.has(blob)){
        return urls.get(blob)
    }
    else{
        let url = URL.createObjectURL(blob)
        urls.set(blob,url)
        return url
    }
}

class DeletePhoto extends Component {

    getFreshPhotos = async () =>{
        const allPhotos = await axios.get('/landingPage/photos')
        console.log(allPhotos.data)
        this.setState({freshPhotos : allPhotos.data})
    }

    

    async componentDidMount(){
        this.getFreshPhotos()
    }
    state = {
            photo_id:'',
            loggedIn : true,
            access_token : localStorage.getItem('access_token'),
            freshPhotos : []
        }

    onChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    deleteThisPhoto = async (id) =>{
       const successMessage = await axios.post('/admin/delPhoto' , {
           photo_id : Number(id),
           token : this.state.access_token
       })
       console.log(successMessage.data)
        if(successMessage.data === "TOKEN EXPIRED"){
            localStorage.removeItem('access_token')
            console.log('token expired login again')
           this.setState({loggedIn : false})
        }
        else{
            this.setState({photo_id : ''})
            this.getFreshPhotos()
        }
        
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
                        <div class="container">
                        <h6 id="mes">Choose the photo(s) you want to delete</h6>
                            
                            <div className="row">
                            
                                
                                    {this.state.freshPhotos.map(fp =>{

                                        const byteChars = atob(fp.image)
                                        //console.log(`bytechars of ${fp.id} are ` + byteChars.substr(0,20))
                                        const byteNumbers = new Array(byteChars.length)
                                        for(let i = 0;i<byteChars.length;i++){
                                            byteNumbers[i] = byteChars.charCodeAt(i)
                                        }
                                        const byteArray = new Uint8Array(byteNumbers)
                                        const blob = new Blob([byteArray])
                                        let photoUrl = getBlobUrl(blob)
                                        return (
                                            <React.Fragment key={fp.id}>
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-12 admin_image_div">
                                            <img className="admin_image" src = {photoUrl}/>
                                            <button onClick = {() =>this.deleteThisPhoto(fp.id)} className="admin_photo_delete_button">Delete</button>
                                            </div>
                                            
                                            </React.Fragment>
                                        )
                                    })}
                                   
                            </div>
                        </div>
                </div>      
            )
      
    }
}

export default DeletePhoto
