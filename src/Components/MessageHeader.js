import React from 'react';
import '../styles/message.css'
import homeicon from '../assets/message-home.svg';
import { useNavigate } from 'react-router-dom';

const MessageHeader = () => {
    const navigate = useNavigate();
    function goHome() {
        navigate("/home")
    }
    return(
        <div className="header-container">
            <button className="home-button" onClick={goHome}>
                <img src={homeicon}/>
            </button>
            <span className="header-name">MESSAGE</span>
        </div>
    )
}

export default MessageHeader;