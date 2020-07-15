import React, { Component} from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
import AwesomeSlider from 'react-awesome-slider'
import styles from 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import StockImage from '../Home/Stock_Concert.jpg'




// import "bootstrap-css-only/css/bootstrap.min.css";
// import {Button} from 'react-bootstrap';
//  import "mdbreact/dist/css/mdb.css";
// import {MDBContainer , MDBBtn ,MDBModal , MDBModalBody , MDBModalHeader , MDBModalFooter , MDBInput} from 'mdbreact';


// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';
import './Home.css';
// Test comment








class Home extends Component {

  fetchEvents = () =>{
    axios.get('./landingPage/events')
    .then(res =>{
      var event_arr = []
      // console.log("raw" , res.data)
      event_arr = res.data.map(e =>{
        return {...e , db_time : new Date(e.db_time)}
      })
      // console.log("before sorting" , event_arr)
      event_arr.sort((a,b) =>{
        return -(a.db_time - b.db_time)
      })
      console.log("after sorting" , event_arr)
      this.setState({events : event_arr})
      console.log(this.state.events)
      // var d = new Date(this.state.events[0].db_time)
      // console.log(d)
      var latest = this.state.events.find(e =>{
        return e.state !== 'completed'
      })
      console.log(latest)
      var all_pastevents = []
      if(latest){
        all_pastevents = this.state.events.filter(e =>{
          return e.state === 'completed'
        })
        this.setState({latestEvent : latest})
        if(latest.state === 'regOpen'){
          this.setState({showRegister : true})
        }
        if(latest.state === 'lineupAnnounced'){
          this.setState({showLineup : true})
        }
        all_pastevents.sort((a,b) =>{
          return -(a.db_time - b.db_time)
        })

        this.setState({
          pastevent1 : all_pastevents[0],
          pastevent2 : all_pastevents[1],
          pastevent3 : all_pastevents[2]
        })
      }
      else{
        this.setState({
          latestEvent : {
            name : 'WELCOME',
            description : 'To the music club'
          }
        })

        all_pastevents = this.state.events.filter(e =>{
          return e.state === 'completed'
        })

        all_pastevents.sort((a,b) =>{
          return -(a.db_time - b.db_time)
        })

        this.setState({
          pastevent1 : all_pastevents[0],
          pastevent2 : all_pastevents[1],
          pastevent3 : all_pastevents[2]
        })
      }
      
      console.log(this.state)
    })
  }
  
 async componentDidMount(){

  this.fetchEvents();
    function isElementInViewport(el){
      // if(typeof jquery === "function" && el instanceof jquery){
      //   el = el[0];
       //}

      var rect = el.getBoundingClientRect();
      // console.log(rect.top);
      // console.log(rect.bottom);
      
      return(
        (rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      )
    }

    var scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback,1000/60)};
    var elemntsToShow = [];
    elemntsToShow.push(this.aboutImg.current);
    elemntsToShow.push(this.aboutDesc.current);
    elemntsToShow.push(this.coordinator1.current);
    elemntsToShow.push(this.coordImage1.current);
    elemntsToShow.push(this.coordText1.current);

    function loop(){
      elemntsToShow.forEach(function(el){
      //console.log(isElementInViewport(el));
        if(isElementInViewport(el)){
          el.classList.add('is-visible');
        } else{
          el.classList.remove('is-visible');
        }
      })

      scroll(loop);
    }

     loop();
        // console.log(this.aboutHead.current);
  }

  state = {
    
    
    modal : false,
    registered : false,
    newRegister : {
      band_name : '',
      player_names : '',
      instrument_names : '',
      email : '',
      year : '',
      contact_number : '',
      song_names : ''
    },
    events : null,
    showRegister : false,
    showLineup : false,
    latestEvent : null,
    pastevent1 : null,
    pastevent2 : null,
    pastevent3 : null
    
  }

  modalToggle = () =>{
    this.setState({
      modal : !this.state.modal
    })
  }

  fade = () => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '20%';
      this.eventDesc1.current.style.opacity = '20%';
      this.eventTitle1.current.style.transform = 'translate(0px , -900px)';
      this.eventDesc1.current.style.transform = 'translate(-1100px , 0px)';
      if(this.regBtn1.current){
        this.regBtn1.current.style.transform = 'translate(-1100px, 0px)';
      }
      if(this.linBtn1.current){
        this.linBtn1.current.style.transform = 'translate(-1100px, 0px)';
      }
      
    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '20%';
      this.eventDesc2.current.style.opacity = '20%';
      this.eventTitle2.current.style.transform = 'translate(0px , -900px)';
      this.eventDesc2.current.style.transform = 'translate(-1100px , 0px)';
      this.moreBtn1.current.style.transform = 'translate(-1100px,0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '20%';
      this.eventDesc3.current.style.opacity = '20%';
      this.eventTitle3.current.style.transform = 'translate(0px , -900px)';
      this.eventDesc3.current.style.transform = 'translate(-1100px , 0px)';
      this.moreBtn2.current.style.transform = 'translate(-1100px,0px)';
    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '20%';
      this.eventDesc4.current.style.opacity = '20%';
      this.eventTitle4.current.style.transform = 'translate(0px , -900px)';
      this.eventDesc4.current.style.transform = 'translate(-1100px , 0px)';
      this.moreBtn3.current.style.transform = 'translate(-1100px,0px)';
    }


  }

  bringBack = (e) => {

    if (this.eventTitle1.current) {
      this.eventTitle1.current.style.opacity = '100%';
      this.eventDesc1.current.style.opacity = '100%';
      this.eventTitle1.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc1.current.style.transform = 'translate(0px , 0px)';
      if(this.regBtn1.current){
        this.regBtn1.current.style.transform = 'translate(0px, 0px)';
      }
      if(this.linBtn1.current){
        this.linBtn1.current.style.transform = 'translate(0px, 0px)';
      }
      

    }

    if (this.eventTitle2.current) {
      this.eventTitle2.current.style.opacity = '100%';
      this.eventDesc2.current.style.opacity = '100%';
      this.eventTitle2.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc2.current.style.transform = 'translate(0px , 0px)';
      this.moreBtn1.current.style.transform = 'translate(0px,0px)';
    }

    if (this.eventTitle3.current) {
      this.eventTitle3.current.style.opacity = '100%';
      this.eventDesc3.current.style.opacity = '100%';
      this.eventTitle3.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc3.current.style.transform = 'translate(0px , 0px)';
      this.moreBtn2.current.style.transform = 'translate(0px,0px)';

    }

    if (this.eventTitle4.current) {
      this.eventTitle4.current.style.opacity = '100%';
      this.eventDesc4.current.style.opacity = '100%';
      this.eventTitle4.current.style.transform = 'translate(0px , 0px)';
      this.eventDesc4.current.style.transform = 'translate(0px , 0px)';
      this.moreBtn3.current.style.transform = 'translate(0px,0px)';
    }

  }

  eventTitle1 = React.createRef();
  eventDesc1 = React.createRef();
  eventTitle2 = React.createRef();
  eventDesc2 = React.createRef();
  eventTitle3 = React.createRef();
  eventDesc3 = React.createRef();
  eventTitle4 = React.createRef();
  eventDesc4 = React.createRef();
  regBtn1 = React.createRef();
  linBtn1 = React.createRef();
  moreBtn1 = React.createRef();
  moreBtn2 = React.createRef();
  moreBtn3 = React.createRef();
  aboutImg = React.createRef();
  aboutDesc = React.createRef();
  regForm = React.createRef();
  tickMark = React.createRef();
  modalBod = React.createRef();
  coordinator1 = React.createRef();
  coordImage1  = React.createRef();
  coordText1 = React.createRef();

  handleChange = (e)=>{
    var {name , value} = e.target;
    let updatedReg = this.state.newRegister;
    updatedReg[name] = value;
    this.setState({newRegister : updatedReg})
    // console.log(this.state.newRegister);

  }

  handleSubmit = (e) =>{
    e.preventDefault();
    
    

    console.log("fetch now");
    console.log(this.state.newRegister)
    console.log(typeof(JSON.stringify(this.state.newRegister)))
      fetch('/landingPage/events/register' , {method : 'POST' ,headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(this.state.newRegister)})
        .then(async response =>{
          const data = await response.json();
          if(!response.ok){
            console.log("errrrorr");
          }

          console.log(data);

        })

        .catch(err => console.error(err))

        this.setState({
          registered:true,
          newRegister : {
            band_name : '',
            player_names : '',
            instrument_names : '',
            email : '',
            year : '',
            contact_number : '',
            song_names : ''
          }

        })
    

     this.modalBod.current.style.opacity = '6%';
     this.tickMark.current.style.opacity = '100%';
     this.tickMark.current.style.transform = 'translate(0px,0px) scale(1.1)';

    //  var inpArr = e.target.querySelectorAll('input' , 'textarea');
    //  var temp_obj = {};
    //  for(let i=0;i<inpArr.length;i++){
    //    temp_obj[inpArr[i].getAttribute('name')] = inpArr[i].value
    //  }

    //  this.props.addReg(temp_obj);
    //  temp_obj = {};
     
    
  }

  

  afterSubmit = (e) =>{
    this.setState({
      registered:false
    })
    
  }

  modalReset = () =>{
    this.regForm.current.reset();
    this.modalBod.current.style.opacity = '100%';
    this.tickMark.current.style.opacity = '0%';
    this.tickMark.current.style.transform = 'translate(0px,50px) scale(0.8)';
    this.setState({
      registered:false
    })
  }

  render() {
    // console.log(this.state.isOnDisplay)
    
    return (
      <React.Fragment>
        
          <AwesomeSlider  fillParent={false} className="carousel " cssModule={styles} transitionDelay={500} mobileTouch={true} bullets={true} onTransitionStart={this.fade} onTransitionEnd={this.bringBack}  >
            <div className="carouselDiv" id="img1">
              <div className="eventTextDiv" >
                <h1 className={"eventTitle text-center"} ref={this.eventTitle1}>{this.state.latestEvent ?  this.state.latestEvent.name : ""}</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc1}>{this.state.latestEvent ?  this.state.latestEvent.date + " at " + this.state.latestEvent.time : ""}</p>
                {this.state.showRegister ?  <button type="button" className="btn btn-white btn-animate  regBtn evtbtn"  ref={this.regBtn1} data-toggle="modal" data-target="#regModal" onClick={this.modalReset}>
                      <span id="regBtnText">Register For Event</span>
                    </button>  : null}
                    <button type="button" className="btn btn-white btn-animate  linBtn evtbtn" id="lineupBut"  ref={this.linBtn1} data-toggle="modal" data-target="#lineupModal">
                      <span id="regBtnText">See Lineup</span>
                    </button>
              </div>
            </div>
            <div className="carouselDiv" id="img2">
              <div className="eventTextDiv">
                <h1 className=" eventTitle text-center" ref={this.eventTitle2}>{this.state.pastevent1 ? this.state.pastevent1.name : ""}</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc2}>{this.state.pastevent1 ? this.state.pastevent1.description : ""}</p>
                <NavLink to = '/event'><button type="button" className="btn btn-white btn-animate  regBtn evtbtn " id="seeMore1" ref={this.moreBtn1}>
                      <span id="regBtnText">See More<i class="fa fa-info-circle" style={{'color' : 'white', 'fontSize' : '18px' , 'paddingLeft' : '11px'}}></i></span>
                    </button></NavLink>
              </div>
            </div>
            <div className="carouselDiv" id="img3">
              <div className="eventTextDiv">
                <h1 className=" eventTitle text-center" ref={this.eventTitle3}>{this.state.pastevent2 ? this.state.pastevent2.name : ""}</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc3}>{this.state.pastevent2 ? this.state.pastevent2.description : ""}</p>
                <NavLink to = '/event'><button type="button" className="btn btn-white btn-animate  regBtn evtbtn "  id="seeMore2" ref={this.moreBtn2}>
                      <span id="regBtnText">See More<i class="fa fa-info-circle" style={{'color' : 'white', 'fontSize' : '18px' , 'paddingLeft' : '11px'}}></i></span>
                    </button></NavLink>
              </div>
            </div>

            <div className="carouselDiv" id="img4">
              <div className="eventTextDiv">
                <h1 className=" eventTitle text-center" ref={this.eventTitle4}>{this.state.pastevent3 ? this.state.pastevent3.name : ""}</h1>
                <p className="text-white text-center eventDesc" ref={this.eventDesc4}>{this.state.pastevent3 ? this.state.pastevent3.description : ""}</p>
                <NavLink to = '/event'><button type="button" className="btn btn-white btn-animate  regBtn evtbtn "  id="seeMore3" ref={this.moreBtn3}>
                      <span id="regBtnText">See More<i class="fa fa-info-circle" style={{'color' : 'white', 'fontSize' : '18px' , 'paddingLeft' : '11px'}}></i></span>
                    </button></NavLink>
              </div>
            </div>
          </AwesomeSlider>
        

                {/*MODAL START*/}

                    <div className="modal fade modalBack" id="regModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content mainModal">

                          <div className="modal-header">
                            <h2 className="modal-title modalTitle mx-auto">Register</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form ref={this.regForm}  onSubmit={this.handleSubmit}>
                          <div id="tickDiv" ref={this.tickMark}></div>
                          <div ref={this.modalBod}  className="modal-body">
                          <div className="wrapper-home">
                          
                            
                            <div className="group">
                              <input className="homeInput" name='player_names' type="text" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} /><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Player Names</label>
                            </div>
                            <div className="group">
                              <input className="homeInput" name='band_name' type="text" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} /><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Band Name</label>
                            </div>
                            <div className="group">
                              <input className="homeInput" name='email' type="email" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} /><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Email (Preferrably College Id)</label>
                            </div>
                            <div className="group">
                              <input className="homeInput" name='year' type="number"  required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} /><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Year</label>
                            </div>
                            <div className="group">
                              <input className="homeInput" name='contact_number' type="tel" pattern="[0-9]{10}" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} /><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Phone Number (10-digit)</label>
                            </div>
                            <div className="group">
                              <textarea className = "homeTextarea" name='instrument_names' type="textarea" rows="3" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} ></textarea><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Instruments/Vocalists</label>
                            </div>
                            <div className="group">
                              <textarea className="homeTextarea" name='song_names' type="textarea" rows="3" required="required" placeholder="." disabled={this.state.registered} onChange={this.handleChange} ></textarea><span className="highlight"></span><span className="bar"></span>
                              <label className="homeLabel">Song List</label>
                            </div>
                            
                          
                      </div>
                          </div>
                          <div className="modal-footer">

                            <div className="btn-box">
                            {!this.state.registered ? (<React.Fragment><button className="btn btn-danger mx-4" type="button" style={{fontFamily : 'Staatliches'}} data-dismiss="modal">Close</button>
                              <button className="btn  btn-outline-warning mx-4" type="submit" style={{fontFamily : 'Staatliches'}}>Register</button></React.Fragment>) : (
                                <React.Fragment><button className="btn btn-success" id="regSucc" type="button" data-dismiss="modal" style={{fontFamily : 'Staatliches'}} onClick={this.afterSubmit}>Registered Successfully</button>
                              </React.Fragment>
                              )}
                              
                              
                           </div>
                          </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/*Register MODAL ENDS*/}

                    {/*Lineup MODAL STARTS*/}

                    <div className="modal fade modalBack" id="lineupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content lin_mainModal">

                          <div className="modal-header">
                            <h2 className="modal-title lin_modalTitle mx-auto">Lineup</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                      
                          <div  className="modal-body">
                               <div className="table-hover table-responsive">
                                 <table className = "table">
                                   <thead>
                                   <tr>
                                     <td><h4 className="text-white">Slot number</h4></td>
                                     <td><h4 className="text-white">BandName</h4></td>
                                     <td><h4 className="text-white">Start time</h4></td>
                                     </tr>
                                   </thead>
                                   <tbody>
                                     <tr>
                                       <td><h5 className="text-white">1</h5></td>
                                       <td><h5 className="text-white">Band1</h5></td>
                                       <td><h5 className="text-white">8:00pm</h5></td>
                                     </tr>

                                     <tr>
                                       <td><h5 className="text-white">2</h5></td>
                                       <td><h5 className="text-white">Band2</h5></td>
                                       <td><h5 className="text-white">9:00pm</h5></td>
                                     </tr>

                                     <tr>
                                       <td><h5 className="text-white">3</h5></td>
                                       <td><h5 className="text-white">Band3</h5></td>
                                       <td><h5 className="text-white">10:00pm</h5></td>
                                     </tr>
                                   </tbody>
                                 </table>
                               </div>

                          </div>
                          <div className="modal-footer">

                          </div>
                          
                        </div>
                      </div>
                    </div>

                    

                {/*Lineup MODAL ENDS*/}
      
      
      
        {/* <hr className='my-4' /> */}
        <div className="jumbotron about-home">
          <h1 className='aboutHeadDiv py-5 px-4' >
            About
            </h1>
          <div className='row'>
            <div ref={this.aboutDesc} className='col-sm-8 aboutTextDiv card-blockquote' >
              <span  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit pellentesque bibendum. Donec eu ornare ex. Etiam pharetra dui elementum euismod mattis. Ut sollicitudin congue odio, sed tempor justo hendrerit vel. Vivamus fringilla dui a quam tincidunt finibus. Nullam sapien enim, ornare non condimentum in, pellentesque ac dolor. Donec vitae nibh eu magna accumsan maximus in sed magna. Ut accumsan gravida lectus. Maecenas eleifend nunc nisl, nec interdum augue fermentum a. Cras non ante quis turpis rhoncus eleifend. Aliquam ut facilisis diam. Nam egestas vehicula sem a pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tempus bibendum justo a fermentum. Praesent a mollis velit. Pellentesque euismod dui id leo finibus ullamcorper.
              Morbi eu leo diam. Fusce enim arta libero viverra, non auctor odio ultrices.
              sdavvavsaavavbadsfdggfadffhggefgffgegdgfhgrgsfdgfbv
              grwrdgfsefdgfgrgfhfgrwdgfnfgrwdgfnfgrw Nulla cursus eget elit vitae tincidunt. Nam a nibh ut nunc lobortis egestas quis sed lacus. Curabitur viverra lectus enim, ac malesuada lorem laoreet venenatis. Sed dui tellus, aliquam laoreet interdum et, gravida eu dui. Sed rhoncus auctor mi eget placerat. Integer nec lacus et mi luctus interdum quis at nisl. Cras a leo vitae arcu iaculis facilisis. Nam et dignissim neque. Nam varius varius accumsan. Vestibulum rutrum fringilla fermentum.</span> </div>
            <div ref={this.aboutImg}  className='aboutImage col-sm-4 view overlay card card-img-top' id='aboutGenImage'>
            </div>
            
          </div>
            
          <hr style={{'backgroundColor' : 'white' , 'width' : '100%' , 'height' : '3px'}}/>
          <h2 className='aboutHeadDiv py-5 px-4'>
              The Team
            </h2>
          <div className="row">
            
            <div className="col-sm-8">
            <h1 ref={this.coordinator1} className='coordinatorHeadDiv py-5 px-4'>
              Name1 : Coordinator
            </h1>

            <div ref = {this.coordText1} className='coordinatorTextDiv card-blockquote' >
              <span  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit pellentesque bibendum. Donec eu ornare ex. Etiam pharetra dui elementum euismod mattis. Ut sollicitudin congue odio, sed tempor justo hendrerit vel. Vivamus fringilla dui a quam tincidunt finibus. Nullam sapien enim, ornare non condimentum in, pellentesque ac dolor. Donec vitae nibh eu magna accumsan maximus in sed magna. Ut accumsan gravida lectus. Maecenas eleifend nunc nisl, nec interdum augue fermentum a. Cras non ante quis turpis rhoncus eleifend. Aliquam ut facilisis diam. Nam egestas vehicula sem a pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tempus bibendum justo a fermentum. Praesent a mollis velit. Pellentesque euismod dui id leo finibus ullamcorper.
              Morbi eu leo diam. Fusce enim arta libero viverra, non auctor odio ultrices.
              sdavvavsaavavbadsfdggfadffhggefgffgegdgfhgrgsfdgfbv
              grwrdgfsefdgfgrgfhfgrwdgfnfgrwdgfnfgrw Nulla cursus eget elit vitae tincidunt. Nam a nibh ut nunc lobortis egestas quis sed lacus. Curabitur viverra lectus enim, ac malesuada lorem laoreet venenatis. Sed dui tellus, aliquam laoreet interdum et, gravida eu dui. Sed rhoncus auctor mi eget placerat. Integer nec lacus et mi luctus interdum quis at nisl. Cras a leo vitae arcu iaculis facilisis. Nam et dignissim neque. Nam varius varius accumsan. Vestibulum rutrum fringilla fermentum.
              </span> </div>
              </div>
              <div ref={this.coordImage1} className='coordinatorImageDiv col-sm-4 view overlay card card-img-top'>
              <img src={StockImage} className="coordinatorImage"/>
            </div>

            
            </div>
          </div>
          
      </React.Fragment>
    )
  }

  

}



// test comment

export default Home;