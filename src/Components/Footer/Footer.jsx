import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' style={{ zIndex: 100, position: 'relative' }}>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Aditya. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;