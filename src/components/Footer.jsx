import React from 'react';
import logo from '../assets/images/whitelogo.png';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={logo} alt="JRM Fitness Logo" className="footer-logo" />
                    <h4>JRM Fitness</h4>
                </div>
                <p className="footer-description">
                    Empowering you to reach your peak potential. Join JRM Fitness for a transformative journey towards health and strength.
                </p>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} JRM Fitness. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
