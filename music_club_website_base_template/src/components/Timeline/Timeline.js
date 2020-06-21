import React,{Component} from 'react'
import './Timeline.css'
import Card from './Cards/Cards'

class Timeline extends Component {
    render(){
        return (
            <div>
              <div className="event-headWrapper">
               <div className="container">
                 <div className="wrap w-100 d-flex align-items-center event-header">
                   <div className="d-flex flex-column align-items-center w-100">
                     <div className="event-title">
                     Timeline
                     </div>
                     <div className="event-path">
                       <div className="event-path-trail"><a href="/">Home</a></div> &gt; <div className="event-title-path">Timeline</div>
                     </div>
                   </div>
                 </div>
               </div>
              </div>
              <div className="container-fluid">
                <div className="outer-wrapper">
                  <div className="wrapper">
                    <div className="slide">
                      <div className="timeline-list">
                        <div className="row">
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                              <div className="card-image">
                                <img src='./images/Gallery/sample_poster.jpg'></img>
                              </div>
                              <div className="card-title">
                                Felicity Inaugrals 2020
                              </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              RoadBlock 2020
                            </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              Unplugged 2019
                            </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              Meltdown 2019
                            </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              Roadblock 2019
                            </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              Unplugged 2019
                            </div>
                            </div>
                          </div>
                          <div className="card-fix">
                            <div className="design-card timeline-event">
                            <div className="card-image">
                              <img src='./images/Gallery/sample_poster.jpg'></img>
                            </div>
                            <div className="card-title">
                              Felicity Inaugrals 2020
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

export default Timeline
