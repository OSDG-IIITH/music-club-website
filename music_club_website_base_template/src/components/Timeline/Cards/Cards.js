import React from 'react'
import './Cards.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Card = ({ event }) => {

    const [ref, inView] = useInView({triggerOnce:true})

    if (event.id < 10) {
        return (
            <motion.div ref={ref} initial={{ x: event.id % 2 ? -50 : 50, opacity: 0 }} animate={{ x: inView ? 0 : event.id % 2 ? -50 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 2 }} >
                <motion.div className={`card-container container-fluid ${event.id % 2 ? "left" : "right"}`} key={event.id} id={`card${event.id}`} whileHover={{ scale: 1.3 }}>
                    <div className="content">
                        <h2>{event.name}</h2>
                        <p>{event.ping_link}</p>
                    </div>
                </motion.div>
            </motion.div>
        )
    }

    else
        return (
            <motion.div  ref={ref} initial={{ x: event.id % 2 ? -50 : 50, opacity: 0 }} animate={{ x: inView ? 0 : event.id % 2 ? -50 : 50, opacity: inView ? 1 : 0 }} transition={{ duration: 2 }}>
                <motion.div className='card-container container-fluid right' key='10' id='card10' whileHover={{scale:1.3}}>
                    <div className="content">
                        <h2>Archives</h2>
                        <p>alskdjask</p>
                    </div>
                </motion.div>
            </motion.div>
        )
}

export default Card
