import React from 'react';
import '../styles/message.css'
import MessageHeader from '../Components/MessageHeader';
import { useNavigate } from 'react-router-dom';
import { getMessages } from '../server/Server';


const MessageContent = () => {
    <p className = "content-container"></p>
}
const MessageSpecific = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/message/inbox");
    }

    return(
        <div>
            <MessageHeader/>
            <div className = "message-border">
                <MessageContent/>
            </div>
            <button className="back-button message-specific" onClick = {goBack}>Back</button>
        </div>
    );
}

export default MessageSpecific;
