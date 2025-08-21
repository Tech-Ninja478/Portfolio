import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Aditya,</span> B-Tech Information Technology</h1>
            <p>Passionate about web development and modern JavaScript frameworks.
                Experienced in building responsive and interactive user interfaces.
                Strong foundation in data structures, algorithms, and problem-solving.
                Eager to learn new technologies and contribute to open-source projects.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero