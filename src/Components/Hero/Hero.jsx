import React from 'react';
import './Hero.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    const qualities = [
        "B-Tech Information Technology",
        "AIML Enthusiast",
        "Software Developer",
        "Full Stack Developer",
        "Open Source Contributor"
    ];
    
    const [currentQuality, setCurrentQuality] = React.useState(0);

    // B.Tech Polish: Faster, kinetic transitions instead of slow typing
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuality((prev) => (prev + 1) % qualities.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [qualities.length]);

    const qualityStyle = {
        background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fc913a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
    };

    return (
        <div id='home' className='hero'>
            {/* THE HOLOGRAPHIC CORE */}
            <div className="hologram-container">
                <div className="hologram-glow"></div>
                
                {/* Floating Tech Orbits */}
                <div className="orbit-circle"><span className="orbit-icon">JS</span></div>
                <div className="orbit-circle"><span className="orbit-icon">React</span></div>
                
                <div className="hero-badge">
                    <div className="terminal-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                        <span className="status-text">SYSTEM_ACTIVE</span>
                    </div>
                    <div className="badge-content">
                        <span className="code-symbol">&lt;</span>
                        <span className="code-text">ADITYA.EXE</span>
                        <span className="code-symbol"> /&gt;</span>
                    </div>
                </div>
                
                {/* Savvy "Live" Data Bits */}
                <div className="data-stream left">01011001</div>
                <div className="data-stream right">OPTIMIZED</div>
            </div>

            <h1>
                <span>I'm Aditya,</span>{' '}
                <div className="typed-wrapper">
                    <span 
                        key={currentQuality} 
                        className="bouncy-text"
                    >
                        {qualities[currentQuality]}
                    </span>
                </div>
            </h1>

            <p>
                Architecting the future of the web with clean code and innovative design.
                Bridging the gap between complex logic and seamless user experiences.
            </p>

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
                </div>
                <a href="/Aditya-Resume.pdf" download="Aditya-Resume.pdf" className="hero-resume">My Resume</a>
            </div>
        </div>
    );
}

export default Hero;