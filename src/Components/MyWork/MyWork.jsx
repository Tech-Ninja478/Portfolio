import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Works</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div className="mywork-item" key={index}>
                        <div className="mywork-img-container">
                            <img src={work.w_img} alt={work.w_name} />
                            <div className="mywork-overlay">
                                <a 
                                    href={work.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="mywork-btn-link"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                        <h2 className="mywork-project-title">{work.w_name}</h2>
                    </div>
                ))}
            </div>

            <div className="mywork-footer">
                <a href="/projects" className="mywork-main-btn">
                    <span>Show More</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default MyWork