import React,{Component} from 'react'
import './Timeline.css'
import Card from './Cards/Cards'
import axios from 'axios';

class Timeline extends Component {

  fetchEvents = async () => {
    const event = await axios.get('/landingPage/events')
    this.setState({allEvents: event.data})
  }

  async componentDidMount(){
    this.fetchEvents();
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
                  {this.state?<Card events={this.state.allEvents}/>:""}
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Timeline
