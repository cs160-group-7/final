import React from 'react';
import MessageHeader from '../Components/MessageHeader';
import mailimage from '../assets/mail-image.svg';
import { useNavigate } from 'react-router-dom';

const WelcomeText = () => {
    var month_arr = ["Jan","Feb","Mar","April", "June","July","Aug","Sep", "Oct", "Nov", "Dec"]
    const d = new Date();
    const month = month_arr[d.getMonth() - 1];
    const date = d.getDate();
    return(
        <div className ="welcome-text-wrap">
          <h3 className = "welcome-text">Good Morning <em>Abigail</em>,</h3>
          <h3 className = "welcome-text">Today is <em>{month} {date}</em>.</h3>
        </div>
    );
}

const MessageHome = () => {
    const navigate = useNavigate();
    function inboxClick() {
        navigate("/message/inbox/")
    }
    function directClick() {
        navigate("/message/compose/")
    }
    
    return(
        <div>
            <MessageHeader/>
            <WelcomeText/>
            <div>
                <button className="mail-button" onClick={inboxClick}><img src={mailimage}/></button>
            </div>
            <button className="makesomeonesday" onClick={directClick}>
               <span>MAKE SOMEONE'S DAY</span>
            </button>
        </div>
    )
}

export default MessageHome;