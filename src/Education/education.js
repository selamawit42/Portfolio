import React from 'react';
import './education.css';

const Education = () => {
    const educationList = [
        {
            school: 'Wachemo University',
            degree: 'Bachelor of Software Engineering',
            duration: '2021 - 2025',
            description: 'Focused on Software Engineering principles, web development, algorithms, and data structures. Participated in multiple programming projects and competitions.'
        },
        {
            school: 'Sheno Secondary School',
            degree: 'High School Diploma',
            duration: '2015 - 2021',
            description: 'Completed high school with a focus on science and mathematics. Active in school clubs and volunteering activities.'
        }
    ];

    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="edu-grid">
                {educationList.map((edu, index) => (
                    <div className="edu-card" key={index}>
                        <h3>{edu.school}</h3>
                        <span className="edu-degree">{edu.degree}</span>
                        <span className="edu-duration">{edu.duration}</span>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
