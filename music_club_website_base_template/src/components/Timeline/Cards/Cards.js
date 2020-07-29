import React from 'react'
import './Cards.css'
import Fade from 'react-reveal/Fade'
import {NavLink} from 'react-router-dom'

const Card = ({events}) => {
    const eventsList= events.map(event =>{
        if(event.id < 10){
            return(
            <Fade>
                <div className={`card-container container-fluid ${event.id%2?"left":"right"}`} key={event.id} id={`card${event.id}`}>
                  <NavLink to = {`/event/${event.id}`}>
                    <div className="content">
                        <h2>{event.name}</h2>
                        <p>{event.ping_link}</p>
                    </div>
                  </NavLink>
                </div>
            </Fade>
            )
        }
    })
    eventsList.push(
        <Fade>
            <div className='card-container container-fluid right' key='10' id='card10'>
                <div className="content">
                    <h2>Archives</h2>
                    <p>alskdjask</p>
                </div>
            </div>
        </Fade>
    )
    return (
        <Fade>
            <div className="container-fluid cards">
                {eventsList}
            </div>
        </Fade>
    )
}

export default Card
