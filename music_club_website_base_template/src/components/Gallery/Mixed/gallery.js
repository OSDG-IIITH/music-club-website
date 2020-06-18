import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { SRLWrapper } from "simple-react-lightbox";
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="event-headWrapper">
          <div className="container">
            <div className="wrap w-100 d-flex align-items-center event-header">
              <div className="d-flex flex-column align-items-center w-100">
                <div className="event-title">
                Gallery
                </div>
                <div className="event-path">
                <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-title-path">Gallery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="content-wrap">
            <div className="wrap w-100 d-flex align-items-center">
              <div className="d-flex flex-column align-items-center w-100 mixed-gallery">
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
                  <br/>
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
                  <br/>
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
                  <br/>
                </SRLWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
