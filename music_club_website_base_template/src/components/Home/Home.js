import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
import AwesomeSlider from 'react-awesome-slider'
import styles from  'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';
import '../Home/Home.css';

class Home extends Component {

  state = {
    isOnDisplay : true
  }

  fade = () =>{
    
    if(this.eventTitle1.current){
      this.eventTitle1.current.style.opacity='20%' ;
     this.eventDesc1.current.style.opacity='20%';
     this.eventTitle1.current.style.transform = 'translate(0px , -700px)';
     this.eventDesc1.current.style.transform = 'translate(-1100px , 0px)';
    }

    if(this.eventTitle2.current){
      this.eventTitle2.current.style.opacity='20%' ;
     this.eventDesc2.current.style.opacity='20%';
     this.eventTitle2.current.style.transform = 'translate(0px , -700px)';
     this.eventDesc2.current.style.transform = 'translate(-1100px , 0px)';
    }

    if(this.eventTitle3.current){
      this.eventTitle3.current.style.opacity='20%' ;
     this.eventDesc3.current.style.opacity='20%';
     this.eventTitle3.current.style.transform = 'translate(0px , -700px)';
     this.eventDesc3.current.style.transform = 'translate(-1100px , 0px)';
    }

    if(this.eventTitle4.current){
      this.eventTitle4.current.style.opacity='20%' ;
     this.eventDesc4.current.style.opacity='20%';
     this.eventTitle4.current.style.transform = 'translate(0px , -700px)';
     this.eventDesc4.current.style.transform = 'translate(-1100px , 0px)';
    }
      
    
    
     
     
  }

   bringBack = (e) =>{
       
    if(this.eventTitle1.current){
      this.eventTitle1.current.style.opacity='100%' ;
     this.eventDesc1.current.style.opacity='100%';
     this.eventTitle1.current.style.transform = 'translate(0px , 0px)';
     this.eventDesc1.current.style.transform = 'translate(0px , 0px)';
     
    }

    if(this.eventTitle2.current){
      this.eventTitle2.current.style.opacity='100%' ;
     this.eventDesc2.current.style.opacity='100%';
     this.eventTitle2.current.style.transform = 'translate(0px , 0px)';
     this.eventDesc2.current.style.transform = 'translate(0px , 0px)';
    }

    if(this.eventTitle3.current){
      this.eventTitle3.current.style.opacity='100%' ;
     this.eventDesc3.current.style.opacity='100%';
     this.eventTitle3.current.style.transform = 'translate(0px , 0px)';
     this.eventDesc3.current.style.transform = 'translate(0px , 0px)';
     
    }

    if(this.eventTitle4.current){
      this.eventTitle4.current.style.opacity='100%' ;
     this.eventDesc4.current.style.opacity='100%';
     this.eventTitle4.current.style.transform = 'translate(0px , 0px)';
     this.eventDesc4.current.style.transform = 'translate(0px , 0px)';
    }

   }

   eventTitle1  = React.createRef();
   eventDesc1 = React.createRef();
   eventTitle2  = React.createRef();
   eventDesc2 = React.createRef();
   eventTitle3  = React.createRef();
   eventDesc3 = React.createRef();
   eventTitle4  = React.createRef();
   eventDesc4 = React.createRef();
 
  render() {
    console.log(this.state.isOnDisplay)
    return (
      <React.Fragment>
      <div className="container-fluid mainDiv bg-dark">
        <AwesomeSlider fillParent={false} className="carousel container-sm" cssModule={styles} transitionDelay={500} mobileTouch={true} bullets={true} onTransitionStart={this.fade} onTransitionEnd={this.bringBack}  >
          <div className=" container-sm  carouselDiv" id="img1">
          <div className="eventTextDiv container-xs" >
            <h1 className={"eventTitle text-center" } ref = {this.eventTitle1}>Meltdown</h1>
            <p className="text-white text-center eventDesc" ref = {this.eventDesc1}>Where all the metal heads go Crazy</p>
          </div>
          </div>
          <div className="container-sm carouselDiv" id="img2">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center" ref={this.eventTitle2}>Euphonic</h1>
            <p className="text-white text-center eventDesc" ref={this.eventDesc2}>The dopest introduction to music club</p>
          </div>
          </div>
          <div className="container-sm carouselDiv" id="img3">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center" ref={this.eventTitle3}>Unplugged</h1>
            <p className="text-white text-center eventDesc" ref={this.eventDesc3}>Just raw beautiful talent , no wires attached</p>
          </div>
          </div>

          <div className="container-sm carouselDiv" id="img4">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center" ref={this.eventTitle4}>Roadblock</h1>
            <p className="text-white text-center eventDesc" ref={this.eventDesc4}>Bring the music to the streets</p>
          </div>
          </div>
        </AwesomeSlider>
        </div>
        <div className="bg-success container-fluid about"><h2 className="text-white text-center pt-4">ABOUT PAGE GOES HERE</h2></div>
      </React.Fragment>
    )
  }
}

export default Home;