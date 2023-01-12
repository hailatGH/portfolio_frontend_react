import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

const data = [
  {
    imgUrl: images.about01,
    title: "Front-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.about01,
    title: "Front-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.about01,
    title: "Front-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
  {
    imgUrl: images.about01,
    title: "Front-End Developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages ",
  },
];

const About = () => {
  const [abouts, setAbouts] = useState(data);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';
  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

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
            <p
              className="p-text"
              style={{ marginTop: "10", textAlign: "justify" }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
