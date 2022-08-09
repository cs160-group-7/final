import React from 'react';
import '../pages/styles/message.css'
import { useNavigate } from 'react-router-dom';
import homeicon from '../assets/message-home.svg';


const MessageHeader = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/home");
        console.log("imin")
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