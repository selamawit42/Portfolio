import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../assets/id.jpg";

import { FaHandPaper } from "react-icons/fa"; // waving hand icon

const words = [
  <>
    Hello <FaHandPaper style={{ marginLeft: "8px", color: "#d9b382" }} />
  </>,
  "I'm Selamawit Teshome",
  "I'm",
  "Software Engineer"
];

function Intro() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(true); // start animation
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimate(false); // reset animation
      }, 600); // match animation duration
    }, 2000); // change word every 2s

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="intro">
      <div></div>
      <img src={bg} alt="Profile" className="bg" />

      <div className="introContent">
        <span className={`flipText ${animate ? "animate" : ""}`}>
          {words[wordIndex]}
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating
          <br />
          visually appealing and user friendly websites.
        </p>

        <a
          href="https://drive.google.com/file/d/1C5k8LeGYRcQv5v_wWILoekApScDCr3PS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resumeBtn"
        >
          See Resume
        </a>
      </div>
    </section>
  );
}

export default Intro;
