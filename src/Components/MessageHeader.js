import React from 'react';
import '../styles/message.css'
import homeicon from '../assets/message-home.svg';
import { useNavigate } from 'react-router-dom';



const MessageHeader = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/home");
    }

    return(
        <div className="header-container">            
            <button className="home-button" onClick={goBack}>
                <img src={homeicon}/>
            </button>
            <span className="header-name">MESSAGE</span>
        </div>
    )
}

export default MessageHeader;
