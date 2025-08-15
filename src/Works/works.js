import React from 'react';
import './works.css';

const Work = () => {
  const experiences = [
    {
      company: "Sheno Volunteer Student Volunteering Group",
      role: "Volunteer",
      dates: "Present",
      description: "Participated in community service, helped schools, and fostered teamwork and social responsibility."
    },
    {
      company: "Hospital Content Management Project",
      role: "Developer",
      dates: "Feb 2025 - Present",
      description: "Developed a Laravel-based hospital management system for appointments, departments, and doctor schedules."
    }
  ];

  return (
    <section id="work" className="section">
      <h2>Work Experience</h2>
      <div className="work-grid">
        {experiences.map((job, index) => (
          <div className="work-card" key={index}>
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <span className="dates">{job.dates}</span>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
