


// import React, { useState } from 'react';
// import './Hero.css';

// function Hero() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle sending the message via backend or EmailJS
//     alert('Message sent!');
//     closeModal();
//   };

//   return (
//     <section className="hero" id="hero">
//       <h1>Empowering Businesses with Innovative IT Solutions</h1>
//       <p>We deliver tailored software services that drive your success.</p>
//       <a href="#!" className="cta" onClick={openModal}>Get In Touch</a>

//       {isModalOpen && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close-btn" onClick={closeModal}>&times;</span>
//             <h2>Contact Us</h2>
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <input type="text" name="name" placeholder="Your Name" required />
//               <input type="email" name="email" placeholder="Your Email" required />
//               <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Hero;


import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Empowering Businesses with Innovative IT Solutions</h1>
      <p>We deliver tailored software services that drive your success.</p>
      <a href="#contact" className="cta">Get In Touch</a>
    </section>
  );
}

export default Hero;
