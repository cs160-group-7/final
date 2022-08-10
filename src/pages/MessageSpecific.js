import React, {useEffect, useState} from "react"
import '../styles/message.css'
import MessageHeader from '../Components/MessageHeader';
import {useParams, useNavigate} from "react-router-dom";
import { getMessages } from '../server/Server';

const MessageSpecific = () => {
  const mid = useParams()
      
  const navigate = useNavigate();

  function goBack() {
      navigate("/message/inbox");
  }

  const [messages, setMessages] = useState([]);
    useEffect(() => {
      getMessages().then(message => {
          setMessages(message)
      })
    }, [])

  return(
    <div>
      <MessageHeader/>
      <div className="message-border">
          {messages.filter((message) => (message.id === mid["id"])).map((message) => (
            <div className="message-content">
              {message.data().content}
            </div>
          ))}
      </div>
      <button className="back-button message-specific" onClick = {goBack}>Back</button>
    </div>
  );
}

export default MessageSpecific;

