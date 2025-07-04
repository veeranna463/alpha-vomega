import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Career from './components/career/Career'; // ✅ Fixed import
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <div className="animated-bg"></div>
      <Header />
      <Hero />
      <About />
      <Career />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
