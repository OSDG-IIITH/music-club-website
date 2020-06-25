import React,{Component} from 'react'
import './Timeline.css'
import Card from './Cards/Cards'

class Timeline extends Component {
    state ={
        "events": [
            {id: 1, title:"Felicity Inaugrals 2020",link:"asjkdjasd"},
            {id: 2, title:"RoadBlock 2020",link:"asjkdjasd"},
            {id: 3, title:"Unplugged 2019",link:"asjkdjasd"},
            {id: 4, title:"Euphonic 2019",link:"asjkdjasd"},
            {id: 5, title:"Meltdown 2019",link:"asjkdjasd"},
            {id: 6, title:"Felicity inaugrals 2019",link:"asjkdjasd"},
            {id: 7, title:"Roadblock 2019",link:"dasda"},
            {id: 8, title:"Unplugged 2019",link:"asdadasd"},
            {id: 9, title:"Unplugged 2019",link:"asdadasd"},
            {id: 10, title:"Unplugged 2019",link:"asdadasd"},
        ],
    }
    render(){
        return (
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
        )
    }
}

export default Timeline

.heading{
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
}

.timeline{
    background-image: url('/images/Timeline/KKW30_FRONT_FULL_1.png');
    background-position: top;
    background-repeat: no-repeat;
    min-height: 3700px;
}

.container-fluid{
    background-color: gray;
}

.cards{
    position: absolute;
    background-color: transparent;
    top:84rem;
    width: 100%;
}

@media screen and (max-width:730px){
    .timeline{
        background-position:60% 0%;
    }

    .container-fluid{
        padding-left: 0px;
    }
}
