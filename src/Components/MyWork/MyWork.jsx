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
                        <button
                            className="mywork-showmore-btn"
                            onClick={() => handleShowMore(work.githubLink)}
                        >
                            Show More
                        </button>
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    )
}

export default MyWork