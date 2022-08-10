import React, {useState, useEffect} from "react"
import MessageHeader from '../Components/MessageHeader';
import MessageList from '../Components/MessageList';
import { useNavigate } from 'react-router-dom';
import { getMessages } from '../server/Server';

const MessageInbox = () => {
    const navigate = useNavigate();
    function goBack() {
        navigate("/message");
    }

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getMessages().then(message => {
            setMessages(message)
        })
    }, [])

    return (
        <div>                 
            <MessageHeader />
            <h4 className="message-inst">Below are all messages received within the last three days.</h4>
            <div className="message-full-wrap">
                <div className="inbox-container">                
                    <MessageList messages={messages}/>
                </div>
            </div>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    );
}

export default MessageInbox;