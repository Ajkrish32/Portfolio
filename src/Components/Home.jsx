import React from "react";
import "./Home.css";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
function Home() {
  return (
    <div id="home" className="home-container">

      <div className="home-content">

        {/* LEFT SECTION */}
        <div className="hero-text">
          <h1>IT Professional & Web Developer</h1>
          <p> MERN | ReactJS | Flutter | SQL | JavaScript</p>

          <div className="hero-info1"> 
              <span>📍 Tirunelveli, India</span>
              <span>🔗 linkedin.com/in/shrikrishnaajay</span>
          </div>
          <div className="hero-info">
            <span>📧 ajkrish9054@gmail.com</span>
            <span>📞 +91 86101 06932</span>
          </div>

          <a href="#projects" className="projects-btn">
            Projects <span className="arrow">{">"}</span>
          </a>

        </div>

        {/* RIGHT SECTION */}
        <div className="home-right">
          <img
            src="/bg.jpg"   /* put image in public folder */
            alt="Shri Krishna Ajay"
            className="profile-img"
          />
        </div>
      </div>

      {/* ICON RAIL */}
      <div className="icon-container">
        <a href="https://www.linkedin.com/" target="_blank" className="icon-box">
          <FaLinkedin className="icon" />
          <span className="icon-text">LinkedIn</span>
        </a>

        <a href="mailto:ajkrish9054@gmail.com" className="icon-box">
          <FaEnvelope className="icon" />
          <span className="icon-text">Email</span>
        </a>

        <a href="/Shri Krishna Ajay P - Resume.pdf" target="_blank" className="icon-box">
          <FaFileAlt className="icon" />
          <span className="icon-text">Resume</span>
        </a>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
