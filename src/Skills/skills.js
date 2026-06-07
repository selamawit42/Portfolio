import React from 'react';
import './skills.css';
import { FaCode, FaTools, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical',
      icon: <FaCode />,
      skills: ['Java', 'C++', 'Python', 'PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'SQL']
    },
    {
      title: 'Tools',
      icon: <FaTools />,
      skills: ['GitHub', 'Git', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Apache NetBeans', 'Anaconda', 'ClickUp', 'WAMP', 'MySQL']
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: ['Teamwork', 'Communication', 'Problem-solving', 'Ownership']
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-header">
              <div className="skill-icon-wrapper">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            <div className="tags">
              {category.skills.map((skill, i) => (
                <span className="tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
