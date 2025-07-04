// import React from 'react';
// import './Career.css';

// function Career() {
//   return (
//     <section className="career" id="career">
//       <h2>Join Our Team</h2>
//       <p>Build your career with Alpha Vomega — where innovation meets opportunity.</p>

//       <div className="job-listings">
//         <div className="job-card">
//           <h3>Frontend Developer</h3>
//           <p>Work with React, modern CSS, and build stunning user interfaces for global clients.</p>
//           <a href="mailto:hr@alphavomega.com?subject=Application%20Frontend%20Developer" className="apply-btn">Apply Now</a>
//         </div>

//         <div className="job-card">
//           <h3>Backend Developer</h3>
//           <p>Develop robust APIs and backend services using Node.js, Java, or Python. Join a collaborative dev team.</p>
//           <a href="mailto:hr@alphavomega.com?subject=Application%20Backend%20Developer" className="apply-btn">Apply Now</a>
//         </div>

//         <div className="job-card">
//           <h3>UI/UX Designer</h3>
//           <p>Design beautiful, user-friendly experiences. Work closely with product and engineering teams.</p>
//           <a href="mailto:hr@alphavomega.com?subject=Application%20UI%20UX%20Designer" className="apply-btn">Apply Now</a>
//         </div>

//         <div className="job-card">
//           <h3>Business Analyst</h3>
//           <p>Analyze client needs, write requirements, and help deliver impactful software solutions.</p>
//           <a href="mailto:hr@alphavomega.com?subject=Application%20Business%20Analyst" className="apply-btn">Apply Now</a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Career;


// import React, { useState } from 'react';
// import './Career.css';

// function Career() {
//   const [openJob, setOpenJob] = useState(null);

//   const toggleJob = (job) => {
//     if (openJob === job) {
//       setOpenJob(null);
//     } else {
//       setOpenJob(job);
//     }
//   };

//   return (
//     <section className="career" id="career">
//       <h2>Join Our Team</h2>
//       <p>Build your career with Alpha Vomega — where innovation meets opportunity.</p>

//       <div className="job-listings">

//         <div className="job-card">
//           <h3 onClick={() => toggleJob('frontend')} className="job-title">
//             Frontend Developer
//           </h3>
//           {openJob === 'frontend' && (
//             <div className="job-details">
//               <p>Work with React, modern CSS, and build stunning user interfaces for global clients.</p>
//               <a href="mailto:hr@alphavomega.com?subject=Application%20Frontend%20Developer" className="apply-btn">
//                 Apply Now
//               </a>
//             </div>
//           )}
//         </div>

//         <div className="job-card">
//           <h3 onClick={() => toggleJob('backend')} className="job-title">
//             Backend Developer
//           </h3>
//           {openJob === 'backend' && (
//             <div className="job-details">
//               <p>Develop robust APIs and backend services using Node.js, Java, or Python. Join a collaborative dev team.</p>
//               <a href="mailto:hr@alphavomega.com?subject=Application%20Backend%20Developer" className="apply-btn">
//                 Apply Now
//               </a>
//             </div>
//           )}
//         </div>

//         <div className="job-card">
//           <h3 onClick={() => toggleJob('uiux')} className="job-title">
//             UI/UX Designer
//           </h3>
//           {openJob === 'uiux' && (
//             <div className="job-details">
//               <p>Design beautiful, user-friendly experiences. Work closely with product and engineering teams.</p>
//               <a href="mailto:hr@alphavomega.com?subject=Application%20UI%20UX%20Designer" className="apply-btn">
//                 Apply Now
//               </a>
//             </div>
//           )}
//         </div>

//         <div className="job-card">
//           <h3 onClick={() => toggleJob('analyst')} className="job-title">
//             Business Analyst
//           </h3>
//           {openJob === 'analyst' && (
//             <div className="job-details">
//               <p>Analyze client needs, write requirements, and help deliver impactful software solutions.</p>
//               <a href="mailto:hr@alphavomega.com?subject=Application%20Business%20Analyst" className="apply-btn">
//                 Apply Now
//               </a>
//             </div>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Career;


import React from 'react';
import './Career.css';

function Career() {
  return (
    <section className="career" id="career">
      <h2>Join Our Team</h2>
      <p>Shape your future with Alpha Vomega — where ideas become innovation.</p>

      <div className="job-listings">
        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p>Work with React, modern CSS, and build stunning UIs for global clients.</p>
          <a href="mailto:hr@alphavomega.com?subject=Frontend%20Developer%20Application" className="apply-btn">Apply Now</a>
        </div>

        <div className="job-card">
          <h3>Backend Developer</h3>
          <p>Develop robust APIs and backend services using Node.js, Java, or Python.</p>
          <a href="mailto:hr@alphavomega.com?subject=Backend%20Developer%20Application" className="apply-btn">Apply Now</a>
        </div>

        <div className="job-card">
          <h3>UI/UX Designer</h3>
          <p>Design user-friendly interfaces and collaborate with product & dev teams.</p>
          <a href="mailto:hr@alphavomega.com?subject=UI%2FUX%20Designer%20Application" className="apply-btn">Apply Now</a>
        </div>

        <div className="job-card">
          <h3>Business Analyst</h3>
          <p>Work with stakeholders to define requirements and drive business impact.</p>
          <a href="mailto:hr@alphavomega.com?subject=Business%20Analyst%20Application" className="apply-btn">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

export default Career;
