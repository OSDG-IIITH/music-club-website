import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { SRLWrapper } from "simple-react-lightbox";
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import './about.css'

class AboutTeam extends Component {
  render() {
    return (
      <div>
        <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                About the Team
                </div>
                <div className="event-path">
                <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-title-path">About the Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrap">
            <div className="wrap w-100 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center w-100 mixed-gallery">
                <div className="category-container">
                  <div className="category-header">
                  Coordinators
                  </div>
                  <div className="category-content">
                    <div className="row clearfix">
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 1 </a></h3>
                                <div className="designation">Vocalist </div>
                            </div>
                        </div>
                      </div>
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 2 </a></h3>
                                <div className="designation">Guitarist </div>
                            </div>
                        </div>
                      </div>
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 6 </a></h3>
                                <div className="designation">Pianist </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="category-container">
                  <div className="category-header">
                  Coordinators
                  </div>
                  <div className="category-content">
                    <div className="row clearfix">
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 3</a></h3>
                                <div className="designation">Instumentalist </div>
                            </div>
                        </div>
                      </div>
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 4 </a></h3>
                                <div className="designation">Guitarist </div>
                            </div>
                        </div>
                      </div>
                      <div className="team-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <a href="#"><img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="" /></a>
                            </div>
                            <div className="lower-content">
                                <h3><a href="#">Coordinator 5</a></h3>
                                <div className="designation">Pianist </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutTeam;
