import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    // TODO: Replace with real email service like Formspree, Getform, or your backend API.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>Let’s talk about how we can help your business grow with custom software solutions.</p>

      <div className="contact-info">
        <div className="info-box">
          <h3>📍 Location</h3>
          <p>Sy No. 148p, 149p, T3607, Quthbullapur, Hyderabad, 500037</p>
        </div>
        <div className="info-box">
          <h3>⏰ Hours</h3>
          <p>Mon - Sat: 10 AM - 6 PM</p>
        </div>
        <div className="info-box">
          <h3>📞 Phone</h3>
          <p><a href="tel:+918247667522">+91-8247667522</a></p>
        </div>
        <div className="info-box">
          <h3>📧 Email</h3>
          <p><a href="mailto:hr@alphavomega.com">hr@alphavomega.com</a></p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your First Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit Your Request</button>
      </form>

      {/* <div className="socials">
        <a href="#" target="_blank" rel="noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noreferrer">Twitter</a>
      </div> */}

      <div className="map-container">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2095952564425!2d78.4587637751907!3d17.44840048340273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9166e029c109%3A0xafe7f6fb78ee55c1!2sQuthbullapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1688841273241!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
