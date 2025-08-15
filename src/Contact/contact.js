import './contact.css';
import React from 'react';

import githubIcon from 'E:/React/my-portfolio/src/assets/github.png';
import telegramIcon from 'E:/React/my-portfolio/src/assets/telagram.png';
import whatsappIcon from 'E:/React/my-portfolio/src/assets/whats up.png';
import linkedinIcon from 'E:/React/my-portfolio/src/assets/linkdin.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section"  method="POST">
      <h2>Contact Me</h2>
      <p className="contact-desc">
        Reach out to me through the form below or via my social links.
      </p>
      <form className="contact-form" action="https://formspree.io/f/xdkdjdpn " method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/selamawit42" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://t.me/selam955" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://wa.me/+251931094269" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://linkedin.com/in/selamawit-teshome-904205318" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
