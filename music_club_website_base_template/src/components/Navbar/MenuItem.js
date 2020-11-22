import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const items = [
  {
    "text": "Home",
    "link": "/"
  },
  {
    "text": "Timeline",
    "link": "/timeline"
  },
  {
    "text": "About Club",
    "link": "/about-club"
  },
  {
    "text": "About Team",
    "link": "/about-team"
  }]

console.log(items)
export const MenuItem = ({ i }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  let text = items[i].text;
  let link = items[i].link;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink to={link} style={{ color: "black" }}>
        <h2> {text} </h2>
      </NavLink>
    </motion.li>
  );
};
