import React from 'react';
import './education.css';
import { FaGraduationCap, FaSchool, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
    const educationList = [
        {
            school: 'Wachemo University',
            degree: 'Bachelor of Software Engineering',
            duration: '2021 - 2025',
            description: 'Focused on Software Engineering principles, web development, algorithms, and data structures. Participated in multiple programming projects and competitions.',
            icon: <FaGraduationCap />
        },
        {
            school: 'Sheno Secondary School',
            degree: 'High School Diploma',
            duration: '2015 - 2021',
            description: 'Completed high school with a focus on science and mathematics. Active in school clubs and volunteering activities.',
            icon: <FaSchool />
        }
    ];

    return (
        <section id="education" className="section">
            <h2 className="section-title">Education</h2>
            <div className="edu-timeline">
                {educationList.map((edu, index) => (
                    <div className="edu-card" key={index}>
                        <div className="edu-icon-wrapper">
                            {edu.icon}
                        </div>
                        <div className="edu-card-content">
                            <h3>{edu.school}</h3>
                            <span className="edu-degree">{edu.degree}</span>
                            <span className="edu-duration">
                                <FaCalendarAlt className="duration-icon" />
                                {edu.duration}
                            </span>
                            <p>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
