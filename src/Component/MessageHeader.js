import React from 'react';

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