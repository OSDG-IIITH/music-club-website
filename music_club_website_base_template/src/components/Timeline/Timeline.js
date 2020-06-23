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
            <div>
              <div className="container-fluid">
                <div className="timeline container-fluid">
                    <Card events={this.state.events}/>
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Timeline
