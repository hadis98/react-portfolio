import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "FrontEnd Developer",
    description: "I am a good frontend developer",
    imgUrl: images.about01,
  },
  {
    title: "Backend Developer",
    description: "I am a good backend developer",
    imgUrl: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good at UI/UX",
    imgUrl: images.about03,
  },
  {
    title: "Web Desing",
    description: "I am a good web desinger",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">I Konw That <span>Good Development</span><br /> means <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
