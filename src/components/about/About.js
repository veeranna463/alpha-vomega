// import React from 'react';
// import './About.css';
// import TeamImg from '../../assets/1.jpg';
// import VisionImg from '../../assets/2.jpg';
// import MissionImg from '../../assets/3.jpg';


// function About() {
//   return (
//     <section className="about" id="about">
//       <h2>About Alpha Vomega</h2>
//       <div className="about-boxes">
//         <div className="about-box">
//           <img src={VisionImg} alt="Vision" />
//           <p>
//             Alpha Vomega is a forward-thinking software solutions company based in Hyderabad.
//             We specialize in delivering innovative, scalable, and robust IT services for businesses of all sizes.
//           </p>
//         </div>
//         <div className="about-box">
//           <img src={MissionImg} alt="Mission" />
//           <p>
//             Our mission is to empower our clients through cutting-edge technology, streamlined processes,
//             and user-centric design. From startups to enterprises, we help transform ideas into powerful digital experiences.
//           </p>
//         </div>
//         <div className="about-box">
//           <img src={TeamImg} alt="Team" />
//           <p>
//             With a dedicated team of developers, designers, and analysts, Alpha Vomega is your trusted partner 
//             for web development, enterprise software, cloud solutions, and beyond.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
// About.js ✅

import React from 'react';
import './About.css';

import TeamImg from '../../assets/1.jpg';
import VisionImg from '../../assets/2.jpg';
import MissionImg from '../../assets/3.jpg';

function About() {
  return (
    <section className="about" id="about">
      <h2>About AlphaVomega</h2>
      <div className="about-boxes">
        <div className="about-box">
          <img src={VisionImg} alt="Vision" />
          <p>
            Alpha Vomega is a forward-thinking software solutions company based in Hyderabad.
            We specialize in delivering innovative, scalable, and robust IT services for businesses of all sizes.
          </p>
        </div>
        <div className="about-box">
          <img src={MissionImg} alt="Mission" />
          <p>
            Our mission is to empower our clients through cutting-edge technology, streamlined processes,
            and user-centric design. From startups to enterprises, we help transform ideas into powerful digital experiences.
          </p>
        </div>
        <div className="about-box">
          <img src={TeamImg} alt="Team" />
          <p>
            With a dedicated team of developers, designers, and analysts, Alpha Vomega is your trusted partner 
            for web development, enterprise software, cloud solutions, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
