import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Experienced Full Stack Developer constantly hunting on for new Projects. Hands-on Experience in Full Stack which includes my current project with ISTE to handle their membership portal</p>
                        <p>AIML and Machine Learning Enthusiast having developed a simple LLM Model as a college project and many more awesome projects in counting</p>
                    </div>
                    <div className="about-skills">
                        <div className="about_skill"><p>HTML</p><hr style={{ width: "75%" }} /></div>
                        <div className="about_skill"><p>CSS</p><hr style={{ width: "75%" }} /></div>
                        <div className="about_skill"><p>React.js</p><hr style={{ width: "70%" }} /></div>
                        <div className="about_skill"><p>Node.js</p><hr style={{ width: "55%" }} /></div>
                        <div className="about_skill"><p>Express.js</p><hr style={{ width: "55%" }} /></div>
                        <div className="about_skill"><p>AIML</p><hr style={{ width: "25%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="about-achievement">
                    <h1>8+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <div className="about-achievement">
                    <h1>5</h1>
                    <p>CERTIFICATIONS</p>
                </div>
            </div>
        </div>
    )
}

export default About