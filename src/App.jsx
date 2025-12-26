import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'

import Programs from './pages/Programs'
import Membership from './pages/Membership'
import logo from './assets/images/whitelogo.png'
import Form from './pages/form'
import Trainer from './pages/Trainer'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const program = ["Warm-up", "Cardio", "Strength Training", "Cool Down"]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div>
        <header className="glossy-header">
          <img src={logo} alt="JRM Fitness Logo" className="header-logo" />
          <h4>JRM Fitness</h4>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </nav>
        </header>

        <div id="home">
          <Home />
        </div>
        <div id="programs" className="container">
          <Programs />
        </div>
        <div id="plans" className="container">
          <Membership /> 
        </div>
        <div id="trainers" className="container">
          <Trainer />
        </div>
        <div id="form" className="container">
          <Form />
        </div>
        <div id="contact" className="container">
          <Contact />
        </div>
        <Footer />
      </div>
  );
}

export default App
