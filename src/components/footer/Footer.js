import React, { useState } from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Footer() {
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { user_email: email },
      'YOUR_USER_ID'
    ).then(
      (result) => {
        alert('Your request has been sent!');
        setEmail('');
      },
      (error) => {
        console.error(error.text);
        alert('Failed to send, please try again.');
      }
    );
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Solutions</h3>
          <p>From chaos to clarity: Turning complexity into clarity</p>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
          <p>info@alphavomega.com</p>
          <p>+91-8247667522</p>
        </div>
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <form className="footer-form" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter your business email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p>© 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
