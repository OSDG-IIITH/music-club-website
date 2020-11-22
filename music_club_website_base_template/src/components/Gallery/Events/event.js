import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
// import FbImageLibrary from 'react-fb-image-grid';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SRLWrapper } from "simple-react-lightbox";
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
// icons : https://icons8.com/icon/pack/music/color
import 'jquery';
import 'popper.js';

import './event.css'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

class Event extends Component {

  fetchSingleEvent = async (id) => {
    const event = await axios.get('/landingPage/events/' + id)
    //console.log(event.data)
    this.setState({currEvent: event.data})
    console.log(this.state.currEvent)
  }

  async componentDidMount(){
    let id = this.props.match.params.id;
    this.fetchSingleEvent(id);
  }

  render() {
    return (
      <div>
         <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                {this.state ?  this.state.currEvent.name : ""}
                </div>
                <div className="event-path">
                  <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-path-trail"><a href="/timeline">Timeline</a></div> &gt; <div className="event-title-path">{this.state ?  this.state.currEvent.name : ""}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">

          <div className="content-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="poster">
                  <img src='/images/Gallery/sample1.png'></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-description">
                  <div className="title">
                    {this.state ?  this.state.currEvent.name : ""}
                  </div>
                  <div className="design-card"> 
                    <div className="list">
                      <div>
                        <b>Date:</b> {this.state ?  this.state.currEvent.date : ""} <br />
                        <b>Venue:</b> {this.state ?  this.state.currEvent.venue : ""}
                      </div>
                    </div>
                    <div className="about">
                    {this.state ?  this.state.currEvent.description : ""}
                    </div>
                  </div>
                  <div className="design-card rating">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-wrapper">
              <div className="wrap w-100 d-flex align-items-center">
                <div className="d-flex flex-column align-items-center w-100 gallery-title">
                <div className="mixed-gallery gallery-grid">
                  <SRLWrapper>
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-12">
                      <img src='/images/Gallery/sample1.png' loading="lazy"></img>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-12">
                      <img src='/images/Gallery/sample1.png' loading="lazy"></img>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-12">
                     <img src='/images/Gallery/sample1.png' loading="lazy"></img>
                    </div>
                    </div>
                  </SRLWrapper>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
          </div>
          {/*}<Sky
            images={{
              0: "https://img.icons8.com/color/96/000000/boombox.png",
              1: "https://img.icons8.com/color/96/000000/earbud-headphones.png",
              2: "https://img.icons8.com/color/96/000000/piano.png",
              3: "https://img.icons8.com/color/96/000000/guitar-amp.png",
              4: "https://img.icons8.com/color/96/000000/rock-music.png",
              5: "https://img.icons8.com/color/96/000000/metal-music.png",
              6: "https://img.icons8.com/color/96/000000/bass-clef.png"
            }}
            how={50} /* Pass the number of images Sky will render chosing randomly
            time={10} /* time of animation
            size={'96px'} /* size of the rendered images
            background={'white'} /* color of background */}

        </div>
      </div>

    )
  }
}

export default Event;
