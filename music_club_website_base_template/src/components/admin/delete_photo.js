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
    deletePhoto = async (e) =>{
       e.preventDefault()
       const successMessage = await axios.post('/admin/delPhoto' , {
           photo_id : Number(this.state.photo_id),
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
                        <h6 id="mes">*Enter id of respective photo which you want to delete</h6>
                            <form onSubmit={this.deletePhoto}>

                                <div class="row">
                                    <div class="col-25">
                                        <label id="label2" for="photo_id">Photo Id:</label>
                                    </div>
                                    <div class="col-75">
                                        <input type="text" id="photo_id" name="photo_id" value={this.state.photo_id} onChange={this.onChange}  ></input>
                                    </div>
                                </div>                            

                                <div class="row">
                                    <input type="submit" id="create" value="Preview"></input>
                                </div>

                            </form>
                            <div>
                            <table className = "table-responsive event_table">
                            <tbody>
                                <tr>
                                    <td>ID</td><td>Label</td><td>B64</td>
                                </tr>
                                    {this.state.freshPhotos.map(fp =>{

                                        const byteChars = atob(fp.image)
                                        console.log(`bytechars of ${fp.id} are ` + byteChars.substr(0,20))
                                        const byteNumbers = new Array(byteChars.length)
                                        for(let i = 0;i<byteChars.length;i++){
                                            byteNumbers[i] = byteChars.charCodeAt(i)
                                        }
                                        const byteArray = new Uint8Array(byteNumbers)
                                        const blob = new Blob([byteArray])
                                        let photoUrl = getBlobUrl(blob)
                                        return (
                                            <React.Fragment key={fp.id}>
                                            <div>
                                            <img className="admin_image" src = {photoUrl}/>
                                            </div>
                                            
                                            </React.Fragment>
                                        )
                                    })}
                                    </tbody>
                                
                            </table>
                            </div>
                        </div>
                </div>      
            )
      
    }
}

export default DeletePhoto
