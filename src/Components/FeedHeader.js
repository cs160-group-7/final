import React from 'react';
import '../styles/message.css'
import homeicon from '../assets/message-home.svg';


const FeedHeader = () => {
    return(
        <div className="feed-header-container">
            <button className="home-button">
                <img src={homeicon}/>
            </button>
            <span className="header-name">FEED</span>
        </div>
    )
}

export default FeedHeader;