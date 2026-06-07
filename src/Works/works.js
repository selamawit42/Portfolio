import React from 'react';
import './works.css';
import workImg from '../assets/id2.jpg';
import { FaCheckCircle, FaHandsHelping, FaLaptopCode, FaCalendarAlt } from 'react-icons/fa';

const Work = () => {
  const benefits = [
    "Over 5 years of hands-on software development experience.",
    "Strong background in multiple programming languages.",
    "Proven track record of delivering high-quality web applications.",
    "Committed to continuous learning and staying updated with tech."
  ];

  const experiences = [
    {
      company: "Sheno Volunteer Student Volunteering Group",
      role: "Volunteer",
      dates: "Present",
      description: "Participated in community service, helped schools, and fostered teamwork and social responsibility.",
      icon: <FaHandsHelping />
    },
    {
      company: "Hospital Content Management Project",
      role: "Developer",
      dates: "Feb 2025 - Present",
      description: "Developed a Laravel-based hospital management system for appointments, departments, and doctor schedules.",
      icon: <FaLaptopCode />
    }
  ];

  return (
    <section id="work" className="section">
      <div className="work-content">
        <div className="work-image-container">
          <img src={workImg} alt="Experience Profile" className="work-image" />
        </div>
        <div className="work-info-wrapper">
          <span className="work-subtitle">About Me</span>
          <h2 className="work-title">Professional Experience & Profile</h2>
          <p className="work-desc">
            I am dedicated to crafting scalable and efficient solutions that provide intuitive user experiences. 
            My journey in software engineering has equipped me with a diverse skill set, allowing me to tackle complex problems efficiently.
          </p>
          <ul className="work-benefits">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <FaCheckCircle className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="work-experience-section">
        <h3 className="work-sub-heading">Recent Experience</h3>
        <div className="work-grid">
          {experiences.map((job, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-header">
                <div className="work-icon-wrapper">
                  {job.icon}
                </div>
                <span className="dates">
                  <FaCalendarAlt className="dates-icon" />
                  {job.dates}
                </span>
              </div>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
