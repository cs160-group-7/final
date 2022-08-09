import React, {useState} from 'react';
import MessageHeader from './MessageHeader';
import { useNavigate } from 'react-router-dom';
import { makeMessage } from '../server/Server';
const MessageCompose = () => {

    const [content, setContent] =  useState("")
    const [isAnonymous, setisAnonymous] =  useState(false)

    const navigate = useNavigate();
    function goBack() {
        navigate("/message");
        console.log("imin")
    }

    const onContentChanage = (event) => {
        const {target : {value}} = event;
        setContent(value);
    }

    return (
        <div>                 
            <MessageHeader />
            <h4 className="message-inst">Write an uplifting message to be sent to a random user.</h4>
            <div className="message-full-wrap">
                <div className="message-container">
                    <textarea
                    value = {content}
                    onChange={onContentChanage}
                    placeholder="What's on your mind?"
                    ></textarea>
                </div>
                <div className="send-container">
                    <div>
                        <span>Remain anonymous</span>
                        <input type="checkbox" defaultChecked={true}></input>
                    </div>
                    <button className="send-button" onClick = {
                        () => {
                        makeMessage({content : content, isAnonymous : false})
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