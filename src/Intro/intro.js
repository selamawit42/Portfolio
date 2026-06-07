import React from "react";
import "./intro.css";
import bg from "../assets/id3.jpg";
import { FaDownload, FaEnvelope, FaBriefcase } from "react-icons/fa";

function Intro() {
  return (
    <section id="intro" className="section">
      <div className="introContent">
        <div className="introTextWrapper">
          <span className="hello">Hello, it's me <span className="wave">👋</span></span>
          <h1 className="introName">I'm <span>Selamawit Teshome</span></h1>
          <h2 className="introRole">A <span className="highlight">Software Engineer</span></h2>
          <p className="introPara">
            I am a passionate developer with experience in creating visually appealing,
            user-friendly, and high-performance applications.
          </p>
          <div className="btnGroup">
            <a
              href="https://drive.google.com/file/d/1C5k8LeGYRcQv5v_wWILoekApScDCr3PS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resumeBtn"
            >
              <FaDownload className="btnIcon" /> See Resume
            </a>
            <a href="#contact" className="contactBtn">
              <FaEnvelope className="btnIcon" /> Contact Me
            </a>
          </div>
        </div>

        <div className="introImgWrapper">
          <img src={bg} alt="Profile" className="bg" />
          
          {/* Floating Badge */}
          <div className="floating-badge">
            <div className="badge-icon">
              <FaBriefcase />
            </div>
            <div className="badge-text">
              <span className="badge-title">Developer</span>
              <span className="badge-subtitle">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
