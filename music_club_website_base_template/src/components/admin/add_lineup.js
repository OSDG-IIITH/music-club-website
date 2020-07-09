import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
import './admin.css'
import axios from 'axios'


export default class AddLineup extends Component {

        getRegistrations = async () =>{
            const thisEventRegs = await axios.get(`/landingPage/events/getRegs/${this.state.id}`)
            console.log(thisEventRegs.data)
            this.setState({registrations : thisEventRegs.data})
        }

        async componentDidMount(){
            this.getRegistrations()
        }

        state = {
            id:localStorage.getItem("event_id"),
            band_name:'',
            slot_given:'',
            slot_number:'',
            song_name:'',
            loggedIn : true,
            access_token : localStorage.getItem('access_token'),
            registrations : [],
            added : [],
            addedMessage : '',
            submitMessage : ''
        }
    
    
    onAdd = (e) =>{
        e.preventDefault()
        var addedEvent = {
            band_name : this.state.band_name,
            slot_given : this.state.slot_given,
            slot_number : Number(this.state.slot_number),
            song_name : this.state.song_name
        }

        this.setState({added : [...this.state.added , addedEvent] , band_name : '' , slot_given : '' , song_name : '' , slot_number : '' , addedMessage : 'Lineup Added'})
        setTimeout(() =>{
            this.setState({addedMessage : ''})
        } , 1500)
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }
    onFinish= async (e)=>{
        e.preventDefault()
        console.log(this.state.added)
        const successMessage = await axios.post('/admin/addLineup' , {
            new_lineup : this.state.added,
            token : this.state.access_token
        })
        console.log(successMessage.data)
        if(successMessage.data === "TOKEN EXPIRED"){
            localStorage.removeItem('access_token')
            console.log('token expired login again')
           this.setState({loggedIn : false})
        }
        else{
            this.setState({added : [] , band_name : '' , slot_given : '' , song_name : '' , slot_number : '' , submitMessage : 'Lineup Saved'})
            setTimeout(() =>{
                this.setState({submitMessage : ''})
            } , 1500)
        }
        
        // localStorage.removeItem('event_id')
    }
    render() {
        //console.log(this.state.added)
        //console.log('event id form local storage is ' , this.state.id)
        if(!(this.state.access_token)){
            this.setState({loggedIn : false})
        }
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/login" />
        }
        return (
            <div class="ok">

                    <div class="lineupContainer">
                    <h6 id="mes">*Fill the following form to add lineup for event by following instruction (if any)</h6>

                        <form onSubmit = {this.onFinish}>

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
                                    <label id="label2" for="song_name">Song Name(s):</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="song_name" name="song_name" value={this.state.song_name} onChange={this.onChange}  ></input>
                                </div>
                            </div>

                           

                            <div class="row">

                                <input onClick={this.onAdd} id="create" value="Add"></input>
                                {this.state.addedMessage}
                            </div>
                            <div class="row">
                                <input type="submit" id="create2"  value="Finish"></input>
                                {this.state.submitMessage}

                            </div>

                        </form>

                         <div>
                         <h3>Lineups to add</h3>
                            <table className = "table-responsive event_table">
                            <tbody>
                                <tr>
                                    <td>ID</td><td>Player Names</td><td>Band Name</td><td>Songs</td>
                                </tr>
                                    {this.state.registrations.map(re =>{
                                        return (
                                            <React.Fragment key={re.id}>
                                            <tr>
                                                <td>{re.id}</td><td>{re.player_names}</td><td>{re.band_name}</td><td>{re.song_names}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                    </tbody>
                                
                            </table>
                        </div> 

                        <div>
                         <h3>Lineups Added</h3>
                            <table className = "table-responsive event_table">
                                <tr>
                                    <td>Slot Number</td><td>Slot Given</td><td>Band Name</td><td>Songs</td>
                                </tr>
                                    {this.state.added.map((ad , ind) =>{
                                        return (
                                            <React.Fragment key={ind}>
                                            <tr>
                                                <td>{ad.slot_number}</td><td>{ad.slot_given}</td><td>{ad.band_name}</td><td>{ad.song_name}</td>
                                            </tr>
                                            </React.Fragment>
                                        )
                                    })}
                                
                            </table>
                        </div> 

                        
                    </div>

            </div>      
        )
    }
}
