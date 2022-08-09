import React from 'react';
import '../pages/styles/message.css'
import homeicon from '../assets/message-home.svg';


const MessageHeader = () => {


    return(
        <div>
            <button className="home-button">
                <img src={homeicon}/>
            </button>
            <span className="header-name">MESSAGE</span>
        </div>
    )
}

export default MessageHeader;