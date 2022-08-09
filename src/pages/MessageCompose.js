import React from 'react';
import MessageHeader from '../Component/MessageHeader';
import { useNavigate } from 'react-router-dom';

const MessageCompose = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/messagehome");
        console.log("imin")
    }
    return (
        <div>                 
            <MessageHeader />
            <h4 className="message-inst">Write an uplifting message to be sent to a random user.</h4>
            <div className="message-full-wrap">
                <div className="message-container">
                    <textarea></textarea>
                </div>
                <div className="send-container">
                    <div>
                        <span>Remain anonymous</span>
                        <input type="checkbox" defaultChecked={true}></input>
                    </div>
                    <button className="send-button">Send</button>
                </div>
            </div>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    );
}

export default MessageCompose;