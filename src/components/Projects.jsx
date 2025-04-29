// import React from "react";
// import "./Projects.css";
// import ytImg from "../assets/yt.png";
// import gitImg from "../assets/github.png";
// import lmImg from "../assets/librarymanag.png";
// import weatherImg from "../assets/weatherforecast.png";
// import ecommImg from "../assets/ecommerce.png";
// const Projects = () => {
//   return (
//     <section className="projectsbody">
//       <div className="title">
//         <h1>My Projects</h1>
//         <p>
//           Here are some of the projects I’ve built to apply my skills in web and
//           app development. Each project reflects my focus on creating
//           functional, user-friendly, and scalable solutions.
//         </p>
//       </div>
//       <div className="projects">
//         <a href="https://github.com/Afifa002/MERN-YT">
//           <img src={ytImg} alt="" className="proimg" />
//           <button>
//             <img src={gitImg} alt="" className="sourcecode" />
//           </button>
//         </a>
//         <a href="https://github.com/Afifa002/library-managment">
//           <img src={lmImg} alt="" className="proimg" />
//           <button>
//             <img src={gitImg} alt="" className="sourcecode" />
//           </button>
//         </a>
//         <a href="https://github.com/Afifa002/ShoppyGlobe-E-commerce">
//           <img src={ecommImg} alt="" className="proimg" />
//           <button>
//             <img src={gitImg} alt="" className="sourcecode" />
//           </button>
//         </a>
//         <a href="https://github.com/Afifa002/weather-forecast-app.">
//           <img src={weatherImg} alt="" className="proimg" />
//           <button>
//             <img src={gitImg} alt="" className="sourcecode" />
//           </button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import ytImg from "../assets/yt.png";
import gitImg from "../assets/github.png";
import lmImg from "../assets/librarymanag.png";
import weatherImg from "../assets/weatherforecast.png";
import ecommImg from "../assets/ecommerce.png";

const Projects = () => {
  return (
    <section id="projectsbody">
      <div className="title">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I’ve built to apply my skills in web and
          app development. Each project reflects my focus on creating
          functional, user-friendly, and scalable solutions.
        </p>
      </div>

      <div className="projects">
        <div className="project-card">
          <a href="https://shoppy-globe-e-commerce-six.vercel.app/">
            <img src={ytImg} alt="YouTube Project" className="proimg" />
            <a href="" target="_blank" rel="noopener noreferrer"></a>
            <button className="git-button">
              <a href="https://github.com/Afifa002/MERN-YT">
                <img src={gitImg} alt="GitHub" className="git-icon" />
              </a>
            </button>
          </a>
        </div>

        <div className="project-card">
          <a href="https://library-managment-xi.vercel.app/">
            <img src={lmImg} alt="Library Management" className="proimg" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="git-button">
              <a href="https://github.com/Afifa002/library-managment">
                <img src={gitImg} alt="GitHub" className="git-icon" />
              </a>
            </button>
          </a>
        </div>

        <div className="project-card">
          <a href="https://shoppy-globe-e-commerce-six.vercel.app/">
            <img src={ecommImg} alt="E-commerce" className="proimg" />

            <a href="" target="_blank" rel="noopener noreferrer"></a>
            <button className="git-button">
              <a href="https://github.com/Afifa002/ShoppyGlobe-E-commerce">
                <img src={gitImg} alt="GitHub" className="git-icon" />
              </a>
            </button>
          </a>
        </div>

        <div className="project-card">
          <a href="https://library-managment-m4u6.vercel.app/">
            <img src={weatherImg} alt="Weather Forecast" className="proimg" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="git-button">
              <a href="https://github.com/Afifa002/weather-forecast-app">
                <img src={gitImg} alt="GitHub" className="git-icon" />
              </a>
            </button>
          </a>
        </div>
      </div>
      <div className="more">
        <button className="morebtn">
          <a href="https://github.com/Afifa002">
            <img src={gitImg} alt="GitHub" className="git-btn" />
          </a>{" "}
          SEE MORE
        </button>
      </div>
    </section>
  );
};

export default Projects;
