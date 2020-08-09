import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { SRLWrapper } from "simple-react-lightbox";
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

 import './about.css'

class AboutClub extends Component {
  render() {
    return (
      <div>
        <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                About the Club
                </div>
                <div className="event-path">
                <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-title-path">About the Club</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrap">
            <div className="wrap w-100 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center w-100 mixed-gallery">
                <div className="about-card">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div class="about-image">  
                  <SRLWrapper>
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                        <img src='./images/Gallery/sample_poster.jpg' loading="lazy"></img>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                        <img src='./images/Gallery/sample_poster.jpg' loading="lazy"></img>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
                       <img src='./images/Gallery/sample_poster.jpg' loading="lazy"></img>
                      </div>
                    </div>
                  </SRLWrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutClub;
