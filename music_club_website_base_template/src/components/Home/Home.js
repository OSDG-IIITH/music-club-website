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
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid mainDiv bg-dark">
        <AwesomeSlider className="carousel container-sm" cssModule={styles}>
          <div className=" container-sm  carouselDiv" id="img1">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center">Meltdown</h1>
            <p className="text-white text-center eventDesc">fcgvhugyftvjkhugyfcghvjhbkj</p>
          </div>
          </div>
          <div className="container-sm carouselDiv" id="img2">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center">Euphonic</h1>
            <p className="text-white text-center eventDesc">fcgvhugyftvjkhugyfcghvjhbkj</p>
          </div>
          </div>
          <div className="container-sm carouselDiv" id="img3">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center">Meltdown</h1>
            <p className="text-white text-center eventDesc">fcgvhugyftvjkhugyfcghvjhbkj</p>
          </div>
          </div>

          <div className="container-sm carouselDiv" id="img4">
          <div className="eventTextDiv container-xs">
            <h1 className=" eventTitle text-center">Meltdown</h1>
            <p className="text-white text-center eventDesc">fcgvhugyftvjkhugyfcghvjhbkj</p>
          </div>
          </div>
        </AwesomeSlider>
        </div>
        <div className="bg-dark container-fluid about"><h2 className="text-white text-center pt-4">ABOUT PAGE GOES HERE</h2></div>
      </React.Fragment>
    )
  }
}

export default Home;