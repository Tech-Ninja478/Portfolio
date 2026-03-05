import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <div className="profile-frame">
                        <img src={profile_img} alt="Aditya" />
                        <div className="frame-border"></div>
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p><span className="drop-cap">E</span>xperienced Full Stack Developer constantly hunting for new projects. Currently architecting the <span>ISTE membership portal</span> to streamline organizational workflow.</p>
                        <p>AIML Enthusiast focused on <span>Neural Networks</span>. Developed a custom LLM architecture as a core project, blending engineering logic with modern AI.</p>
                    </div>

                    <div className="about-skills">
                        {[
                            { name: "HTML & CSS", level: "90%" },
                            { name: "React.js", level: "85%" },
                            { name: "Node & Express", level: "75%" },
                            { name: "AIML / Python", level: "70%" },
                            { name: "Data Structures", level: "80%" }
                        ].map((skill, index) => (
                            <div key={index} className="about-skill-container">
                                <div className="skill-info">
                                    <p>{skill.name}</p>
                                    <span>{skill.level}</span>
                                </div>
                                <div className="skill-bar-bg">
                                    <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="achievement-card">
                    <h1>3+</h1>
                    <p>YEARS OF TECH STACK</p>
                </div>
                <div className="achievement-card">
                    <h1>10+</h1>
                    <p>PROJECTS DEPLOYED</p>
                </div>
                <div className="achievement-card">
                    <h1>5+</h1>
                    <p>CORE CERTIFICATIONS</p>
                </div>
            </div>
        </div>
    )
}

export default About