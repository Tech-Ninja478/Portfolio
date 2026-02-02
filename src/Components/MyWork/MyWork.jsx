import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    const handleShowMore = (githubLink) => {
        window.open(githubLink, '_blank');
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Works</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div className="mywork-item" key={index}>
                        <img src={work.w_img} alt={work.title} className="mywork-img" />
                        <h2 className="mywork-project-title">{work.w_name}</h2>
                        <a
                            href={work.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mywork-showmore-btn"
                        >
                            Show More
                        </a>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <a
                    href="/projects"
                    className="mywork-showmore-link"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        padding: '14px 32px',
                        borderRadius: '8px',
                        background: 'linear-gradient(90deg, royalblue 60%, #4169e1 100%)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                        transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
                        letterSpacing: '1px',
                        marginTop: '32px',
                        border: 'none',
                        cursor: 'pointer',
                        gap: '12px'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, #4169e1 60%, royalblue 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, royalblue 60%, #4169e1 100%)';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                    }}
                >
                    <span style={{ fontWeight: 'bold' }}>Show More</span>
                    {/* Inline SVG for dark arrow icon */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M12 8l8 8-8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default MyWork