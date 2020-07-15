import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
// import FbImageLibrary from 'react-fb-image-grid';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Sky from 'react-sky';
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
  render() {
    return (
      <div>
         <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                Event Name {this.props.match.params.id}
                </div>
                <div className="event-path">
                  <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-path-trail"><a href="/timeline">Timeline</a></div> &gt; <div className="event-title-path">Event Name</div>
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
                  <img src='/images/Gallery/sample_poster.jpg'></img>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-description">
                  <div className="title">
                    Event Name 2019
                  </div>
                  <div className="design-card">
                    <div className="list">
                      <ul>
                        <li> <b>Date:</b> 07-10-2019</li>
                        <li> <b>Venue:</b> Vindhya Canteen</li>
                      </ul>
                    </div>
                    <div className="about">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>
                  </div>
                  <div className="design-card rating">
                    Please rate us if you attended this event: <FontAwesomeIcon icon="coffee" />
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={37}
                      half={true}
                      emptyIcon={<i class="fas fa-heart"></i>}
                      halfIcon={<i className='fa fa-star-half-alt'></i>}
                      fullIcon={<i className='fa fa-star'></i>}
                      color2={'#ffd700'} />
                      <button type="submit" class="btn btn-info btn-rounded btn-fw"><b>Submit</b></button>
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
                      <img src='/images/Gallery/sample_poster.jpg' loading="lazy"></img>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-12">
                      <img src='/images/Gallery/sample_poster.jpg' loading="lazy"></img>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-12">
                     <img src='/images/Gallery/sample_poster.jpg' loading="lazy"></img>
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
