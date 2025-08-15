import React from 'react';
import './skills.css'; // Ensure this path matches your file structure

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="grid cols-3">
        {/* Technical Skills */}
        <div className="card">
          <div className="card-body">
            <h3>Technical</h3>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">C++</span>
              <span className="tag">Python</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">SQL</span>
              <span className="tag">Git</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="card">
          <div className="card-body">
            <h3>Tools</h3>
            <div className="tags">
              <span className="tag">GitHub</span>
              <span className="tag">VS Code</span>
              <span className="tag">IntelliJ</span>
              <span className="tag">XAMPP</span>
              <span className="tag">MySQL</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="card">
          <div className="card-body">
            <h3>Soft Skills</h3>
            <div className="tags">
              <span className="tag">Teamwork</span>
              <span className="tag">Communication</span>
              <span className="tag">Problem-solving</span>
              <span className="tag">Ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
