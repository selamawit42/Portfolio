import './contact.css';
import React from 'react';
import { FaGithub, FaTelegramPlane, FaWhatsapp, FaLinkedinIn, FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-desc">
        Have a project in mind or want to collaborate? Reach out through the form below or connect via social links.
      </p>

      <div className="contact-wrapper">
        {/* Social Cards */}
        <div className="contact-info">
          <a href="https://github.com/selamawit42" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon github-color">
              <FaGithub />
            </div>
            <div className="contact-card-text">
              <h4>GitHub</h4>
              <span>selamawit42</span>
            </div>
          </a>
          <a href="https://t.me/selam955" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon telegram-color">
              <FaTelegramPlane />
            </div>
            <div className="contact-card-text">
              <h4>Telegram</h4>
              <span>@selam955</span>
            </div>
          </a>
          <a href="https://wa.me/+251931094269" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon whatsapp-color">
              <FaWhatsapp />
            </div>
            <div className="contact-card-text">
              <h4>WhatsApp</h4>
              <span>+251 931 094 269</span>
            </div>
          </a>
          <a href="https://linkedin.com/in/selamawit-teshome-904205318" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon linkedin-color">
              <FaLinkedinIn />
            </div>
            <div className="contact-card-text">
              <h4>LinkedIn</h4>
              <span>Selamawit Teshome</span>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" action="https://formspree.io/f/xdkdjdpn" method="POST">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="input-group textarea-group">
            <FaComment className="input-icon" />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="contact-btn">
            <FaPaperPlane className="btn-icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
