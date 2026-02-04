import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'; // Use your existing logo

const Footer = () => {
    return (
        <footer className='footer'>
            <hr className="footer-divider" />
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="Aditya Logo" className="footer-logo" />
                    <p className="footer-tagline">
                        Building scalable backend architectures and intelligent systems.
                    </p>
                </div>
                
                <div className="footer-right">
                    <div className="footer-social-links">
                        <a href="https://github.com/Tech-Ninja478" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/aditya-pachpute123" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <div className="system-status">
                        <span className="status-indicator"></span>
                        <p>SYSTEM_ONLINE // Mumbai, MH</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ADITYA_PACHPUTE. All rights reserved.</p>
                <div className="footer-legal">
                    <span>PRIVACY_POLICY</span>
                    <span>TERMS_OF_SERVICE</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;