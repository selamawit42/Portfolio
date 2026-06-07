import React from 'react';
import './profile.css';
import profileImg from '../assets/id.jpg';
import { FaCheckCircle } from 'react-icons/fa';

const Profile = () => {
  const benefits = [
    "Over 3 years of hands-on software development experience.",
    "Strong background in multiple programming languages.",
    "Proven track record of delivering high-quality web applications.",
    "Committed to continuous learning and staying updated with tech."
  ];

  return (
    <section id="profile" className="section profile-section">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>
        <div className="profile-text-wrapper">
          <span className="profile-subtitle">About Me</span>
          <h2 className="profile-title">Professional Experience & Profile</h2>
          <p className="profile-desc">
            I am dedicated to crafting scalable and efficient solutions that provide intuitive user experiences. 
            My journey in software engineering has equipped me with a diverse skill set, allowing me to tackle complex problems efficiently.
          </p>
          <ul className="profile-benefits">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
