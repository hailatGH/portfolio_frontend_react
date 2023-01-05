import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description:
      "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008. He purchased the social media service Twitter in 2022",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Development",
    description:
      "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008. He purchased the social media service Twitter in 2022",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description:
      "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008. He purchased the social media service Twitter in 2022",
    imgUrl: images.about03,
  },
  {
    title: "MERN Stack Development",
    description:
      "Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008. He purchased the social media service Twitter in 2022",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development </span>
        <br />
        means<span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
