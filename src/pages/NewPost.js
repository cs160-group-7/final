import React, {useState} from "react"
import {useNavigate} from "react-router-dom";

const NewPost = () => {

    const [topic, setTopic] = useState("")
    const [content, setContent] = useState("GRATITUDE")
    const [author, setAuthor] = useState("1")
    const onContentChanage = (event) => {
        const {target : {value}} = event;
        setContent(value);
    }

    const onTopicChange = (event) => {
        const {target : {value}} = event;
        setTopic(value);
        console.log(topic)
    }


    const navigate = useNavigate()

    return (
        <>
            <button className = "exit">  </button>
            <select id="topic-select" onChange={onTopicChange}>
                <option>GRATITUDE</option>
                <option>WORRY</option>
            </select>
            <h4 className="post-inst">Write an uplifting message to be sent to a random user.</h4>
            <div className="post-full-wrap">
                <div className="post-container">
                    <textarea
                        value = {content}
                        onChange={onContentChanage}
                        placeholder="What's on your mind?"
                    ></textarea>
                </div>
            </div>
            <button className="post-button">PUBLISH</button>
        </>
    )
}

export default NewPost