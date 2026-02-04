import React, { useState } from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: "Full Stack Developer Intern",
            role: "Indian Society for Technical Education (ISTE)",
            duration: "January 2025 - January 2026",
            details: [
                "Built and maintained a MERN-based membership portal serving 30,000+ users across institutional, student,lifetime, and senior memberships.",
                "Migrated workflows from Excel-based processing to a centralized web platform, improving accuracy, traceability,and operational efficiency.",
                "Developed secure role-based admin and client modules for real-time form submission, approval, and verification.",
                "Implemented SendGrid-based bulk email automation, improving reliability over NodeMailer.",
                "Built backend APIs, input validation, and access control to ensure secure handling of sensitive membership data."
            ],
            tech: ["Node.js", "Express.js", "React.js", "MongoDB"]
        },
        // Add more experiences here
    ];

    return (
        <div id='experience' className='experience'>
            <div className='experience-title'>
                <h1>My Work Experiences</h1>
            </div>

            <div className="experience-container">
                {/* NAVIGATION NODES */}
                <div className="experience-tabs">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className={`exp-tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="tab-year">{exp.duration.split(' ')[0]}</span>
                            <span className="tab-name">{exp.company}</span>
                        </div>
                    ))}
                </div>

                {/* TERMINAL DISPLAY */}
                <div className="experience-terminal">
                    <div className="terminal-header">
                        <div className="dots"><span></span><span></span><span></span></div>
                        <p>session_details.sh — 128kb</p>
                    </div>
                    <div className="terminal-body">
                        <div className="terminal-line">
                            <span className="command">&gt; ROLE:</span>
                            <span className="value">{experiences[activeTab].role}</span>
                        </div>
                        <div className="terminal-line">
                            <span className="command">&gt; PERIOD:</span>
                            <span className="value">{experiences[activeTab].duration}</span>
                        </div>
                        <div className="terminal-content">
                            <span className="command">&gt; LOGS:</span>
                            <ul>
                                {experiences[activeTab].details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="terminal-tech">
                            {experiences[activeTab].tech.map((t, i) => (
                                <span key={i} className="tech-pill">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience