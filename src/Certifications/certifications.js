import React from 'react';
import './certifications.css';
import C1 from '../assets/C1.png'; // Replace with your certificate images
import C2 from '../assets/C1.png';
import C3 from '../assets/C3.png';
import C4 from '../assets/C4.jpeg';

const Certifications = () => {
    const certifications = [
        {
            title: 'Responsive Web Design',
            image: C1,
            description: 'Completed FreeCodeCamp course on Responsive Web Design, including HTML, CSS, and Flexbox.'
        },
        {
            title: 'JavaScript Algorithms and Data Structures',
            image: C2,
            description: 'Learned advanced JavaScript algorithms, data structures, and problem-solving techniques.'
        },
        {
            title: 'Advanced Java',
            image: C3,
            description: 'Completed a professional Java course on Mind Luster, covering OOP, GUI, and backend programming.'
        },
          {
            title: 'React',
            image: C4,
            description: 'Completed a professional Java course on Mind Luster, covering OOP, GUI, and backend programming.'
        },
    ];

    return (
        <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="cert-grid">
                {certifications.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <img src={cert.image} alt={cert.title} className="cert-img" />
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
