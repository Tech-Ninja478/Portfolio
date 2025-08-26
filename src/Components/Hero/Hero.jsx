import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile-3.jpg'
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
    const [displayedText, setDisplayedText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 120;
        const current = qualities[currentQuality];
        let timeout;

        if (!isDeleting && displayedText.length < current.length) {
            timeout = setTimeout(() => {
                setDisplayedText(current.slice(0, displayedText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayedText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(current.slice(0, displayedText.length - 1));
            }, typingSpeed);
        } else if (!isDeleting && displayedText.length === current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrentQuality((prev) => (prev + 1) % qualities.length);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentQuality, qualities]);

    // Custom style for the quality section
    const qualityStyle = {
        background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 50%, #fc913a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold'
    };

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1>
                <span>I'm Aditya,</span>{' '}
                <span className="typed" style={qualityStyle}>{displayedText}</span>
                <span className="typed-cursor">|</span>
            </h1>
            <p>
                Passionate about web development and modern JavaScript frameworks.
                Experienced in building responsive and interactive user interfaces.
                Strong foundation in data structures, algorithms, and problem-solving.
                Eager to learn new technologies and contribute to open-source projects.
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

export default Hero