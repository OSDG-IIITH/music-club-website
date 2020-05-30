import React from 'react'
import './Cards.css'

const Card = ({events}) => {
    const eventsList= events.map(event =>{
        return(
        <div className={`card-container container-fluid ${event.id%2?"left":"right"}`} key={event.id} id={`card${event.id}`}>
            <div className="content">
                <h2>{event.title}</h2>
                <p>{event.link}</p>
            </div>
        </div>
        )
    })
    return (    
        <div className="container-fluid cards">
            {eventsList}
        </div>
    )
}

export default Card