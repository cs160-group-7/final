import React, {useState} from 'react';
import MessageHeader from '../Components/MessageHeader';
import { useNavigate } from 'react-router-dom';
import { makeMessage } from '../server/Server';

const MessageCompose = () => {

    const [content, setContent] =  useState("");
    const [isAnonymous, setisAnonymous] =  useState(true);

    const navigate = useNavigate();
    function goBack() {
        navigate("/message");

    }

    const onContentChange = (event) => {
        const {target : {value}} = event;
        setContent(value);
    }

    const handleCheckbox = (data) => {
        if (data === "anonymous") {
        }
        setisAnonymous(!isAnonymous);
    }

    return (
        <div>                 
            <MessageHeader />
            <h4 className="message-inst">Write an uplifting message to be sent to a random user.</h4>
            <div className="message-full-wrap">
                <div className="message-container">
                    <textarea
                    value = {content}
                    onChange={onContentChange}
                    placeholder="How is your day going?"
                    ></textarea>
                </div>
                <div className="send-container">
                    <div>
                        <span>Remain anonymous</span>
                        <input type="checkbox" defaultChecked={true} onChange={handleCheckbox("anonymous")}></input>
                    </div>
                    <button className="send-button" onClick = {
                        () => {
                        makeMessage({content : content, isAnonymous : isAnonymous})
                        setContent("")
                    }
                    }>Send</button>
                </div>
            </div>
            <button className="back-button" onClick={goBack}>Back</button>
        </div>
    );
}

export default MessageCompose;