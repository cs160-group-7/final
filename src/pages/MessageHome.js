import React from 'react';
import MessageHeader from '../Component/MessageHeader';
import mailimage from '../assets/mail-image.svg';

const WelcomeText = () => {
    var month_arr = ["Jan","Feb","Mar","April", "June","July","Aug","Sep", "Oct", "Nov", "Dec"]
    const d = new Date();
    const month = month_arr[d.getMonth() - 1];
    const date = d.getDate();
    console.log(month);
    console.log(date);
    return(
        <div className ="welcome-text-wrap">
          <h3 className = "welcome-text">Good Morning <em>Name</em>,</h3>
          <h3 className = "welcome-text">Today is <em>{month} {date}</em>.</h3>
        </div>
    );
}

const MessageHome = () => {
    return(
        <div>
            <MessageHeader/>
            <WelcomeText/>
            <div>
                <button className="mail-button"><img src={mailimage}/></button>
            </div>
            <button className="makesomeonesday">
               <span>MAKE SOMEONE'S DAY</span>
            </button>
        </div>
    )
}

export default MessageHome;