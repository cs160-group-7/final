import React from 'react';
import '../styles/message.css'
import homeicon from '../assets/message-home.svg';
import {useNavigate} from "react-router-dom";


const PostDetailHeader = () => {

    const navigate = useNavigate()
    return(
        <div className="feed-header-container">
            <button className="home-button" onClick={()=>navigate("/feed")}>
                <img src={homeicon}/>
            </button>
            <span className="feed-header-name">FEED</span>
        </div>
    )
}

export default PostDetailHeader;