import React from "react";
import { Link } from "react-scroll";
import hireImg from "../assets/hireme.png";
import "./Intro.css";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Afifa</span> <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          I’m a developer passionate about creating clean and impactful digital
          solutions. With experience in web and mobile development, I love
          turning ideas into real-world applications and constantly seek new
          challenges to grow.
        </p>

        <a
          href="/Afifa_Resume.pdf"
          download="Afifa_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <button className="btn">Download Resume</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Intro;
