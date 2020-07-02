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
            showAll : true,
            photo_id:'',
            loggedIn : true,
            access_token : localStorage.getItem('access_token'),
            freshPhotos : [],
            searchVal : '',
            searchedImages : []
        }

    onSearch = (e) =>{

        let str  = e.target.value
        var re = new RegExp(`^${str}` , 'i')
        var filteredPhotos = this.state.freshPhotos.filter(fp =>{
            if(fp.label.search(re) === -1){
                return false
            }
            else{
                return true
            }
        })
        this.setState({
            [e.target.name] : e.target.value,
            showAll : false,
            searchedImages : filteredPhotos
        })
        console.log(this.state.searchVal)
    }
    deleteThisPhoto = async (id , str) =>{
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
            this.setState({showAll : true})
            this.getFreshPhotos()
            var re = new RegExp(`^${str}` , 'i')
            
        }
        
    }

    handleReset = (e) =>{
        e.preventDefault()
        this.setState({showAll : true})
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
                        <h6 id="mes">Choose the photo(s) you want to delete(search by event name)</h6>

                        <form>
                        <i class="fa fa-search admin_search_icon"></i>
                            <input name="searchVal" className="admin_search_field" type="text" onChange={this.onSearch}/>
                            <button className="my-4" style={{'marginLeft' : '6vw','backgroundColor' : 'green'}} onClick={this.handleReset}>Show All</button>
                        </form>
                            
                            <div className="row admin_image_row">
                            
                                
                                    {this.state.freshPhotos.length ? (this.state.showAll ? this.state.freshPhotos.map(fp =>{

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
                                            <img title={fp.label} className="admin_image" src = {photoUrl}/>
                                            <button onClick = {() =>this.deleteThisPhoto(fp.id)} className="admin_photo_delete_button">Delete</button>
                                            </div>
                                            
                                            </React.Fragment>
                                        )
                                    }) : (this.state.searchedImages.length ? this.state.searchedImages.map(sp =>{
                                        const byteChars = atob(sp.image)
                                        //console.log(`bytechars of ${fp.id} are ` + byteChars.substr(0,20))
                                        const byteNumbers = new Array(byteChars.length)
                                        for(let i = 0;i<byteChars.length;i++){
                                            byteNumbers[i] = byteChars.charCodeAt(i)
                                        }
                                        const byteArray = new Uint8Array(byteNumbers)
                                        const blob = new Blob([byteArray])
                                        let photoUrl = getBlobUrl(blob)
                                        return (
                                            <React.Fragment key={sp.id}>
                                            <div className="col-sm-12 col-md-4 col-lg-4 col-12 admin_image_div">
                                            <img title={sp.label} className="admin_image" src = {photoUrl}/>
                                            <button onClick = {() =>this.deleteThisPhoto(sp.id , this.state.searchVal)} className="admin_photo_delete_button">Delete</button>
                                            </div>
                                            
                                            </React.Fragment>
                                        )
                                    }) :  (<div className="noDiv"><h1 className="text-white noMsg">Searched event doesnt exist</h1></div>) )) : (
                                        <div className="noDiv">
                                        <h1 className="text-white noMsg">No Photos in DB !</h1>
                                        </div>
                                    )}
                                   
                            </div>
                        </div>
                </div>      
            )
      
    }
}

export default DeletePhoto
