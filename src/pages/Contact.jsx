import React from "react";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you! Reach out with any questions or feedback.</p>
        </div>

        <div className="contact-content">
          {/* CONTACT INFO */}
          <div className="contact-info">
            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <p>+1 234 567 890</p>
            </div>
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <p>support@healthai.com</p>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 Wellness St, New York, USA</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
