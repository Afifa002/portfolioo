import React from "react";
import "./Skills.css";
import mernImg from "../assets/MERN.png";
import webImg from "../assets/webd.png";
import reactImg from "../assets/react.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesk">
        I design and build web applications that are clean, user-friendly, and
        impactful. With a strong focus on development and problem-solving, I
        enjoy bringing ideas to life through code and continuous learning.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={mernImg} alt="mernImg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>MERN Stack Development</h2>
            <p>
              {" "}
              I build full-stack web applications using the MERN stack (MongoDB,
              Express, React, Node.js), delivering robust and scalable
              solutions.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webImg} alt="webImg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              {" "}
              I craft modern, responsive websites with a focus on performance,
              accessibility, and user experience.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={reactImg} alt="reactImg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React Development</h2>
            <p>
              {" "}
              I develop dynamic, interactive frontends using React, creating
              seamless and engaging user interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
