// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/images/alpha-vomega-logo.png" alt="Alpha Vomega Logo" />
//         {/* <span>AlphaVomega</span> */}
//       </div>
//       <nav>
//         <a href="#hero">Home</a>
//         <a href="#about">About</a>
//         <a href="#career">Careers</a>
//         <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;
// import React from 'react';
// import './Header.css';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="#hero">
//           <img src="/images/alpha-vomega-logo.png" alt="Alpha Vomega Logo" />
//         </a>
//         {/* <span>AlphaVomega</span> */}
//       </div>
//       <nav>
//         <a href="#hero">Home</a>
//         <a href="#about">About</a>
//         <a href="#career">Careers</a>
//         <a href="#contact">Contact</a>
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#hero">
          <img src="/images/alpha-vomega-logo.png" alt="Alpha Vomega Logo" />
        </a>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}>
        <a href="#hero" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#career" onClick={toggleMenu}>Careers</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
