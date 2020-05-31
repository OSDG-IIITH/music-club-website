import React from 'react'
import './Cards.css'
import './FadeEffect'

const Card = ({events}) => {
    const eventsList= events.map(event =>{
        if(event.id < 10){
            return(
            <div className={`card-container container-fluid ${event.id%2?"left":"right"}`} key={event.id} id={`card${event.id}`}>
                <div className="content">
                    <h2>{event.title}</h2>
                    <p>{event.link}</p>
                </div>
            </div>
            )
        }
    })
    eventsList.push(
        <div className='card-container container-fluid right' key='10' id='card10'>
            <div className="content">
                <h2>Archives</h2>
                <p>alskdjask</p>
            </div>
        </div>
    )
    return (    
        <div className="container-fluid cards">
            {eventsList}
        </div>
    )
}

export default Card