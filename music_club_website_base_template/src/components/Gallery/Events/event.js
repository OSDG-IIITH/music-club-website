import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import FbImageLibrary from 'react-fb-image-grid';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import './event.css'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

const images = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
    "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"]

class Event extends Component {
  render() {
    return (
      <div>
        <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                Event Name
                </div>
                <div className="event-path">
                Home &gt; Timeline &gt; <div className="event-title-path">Event Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrap">
            <div className="row">
              <div className="col-md-6">
                <div className="poster">
                  <img src='./images/Gallery/sample_poster.jpg'></img>
                </div>
              </div>
              <div className="col-md-6">
                <div className="event-description">
                  <div className="title">
                    Event Name 2019
                  </div>
                  <div className="list">
                    <ul>
                      <li> <b>Date:</b> 07-10-2019</li>
                      <li> <b>Venue:</b> Vindhya Canteen</li>
                    </ul>
                  </div>
                  <div className="about">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </div>
                  <div className="rating">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-wrapper">
            <div className="wrap w-100 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center w-100 gallery-title">
                GALLERY
              </div>
            </div>
          </div>
          <div className="gallery-wrapper">
            <div className="wrap w-100 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center w-100 gallery-title">
                <FbImageLibrary images={images}/>
              </div>
            </div>
          </div>
          <div className="footer">
          </div>
        </div>
      </div>

    )
  }
}

export default Event;
