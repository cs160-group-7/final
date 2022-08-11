import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {makePost} from "../server/Server";
import exit from "../assets/exit.svg";

const NewPost = () => {

    const [topic, setTopic] = useState("GRATITUDE")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("Wonjae")
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
            <button className="exit-button" onClick={()=>navigate("/feed")}>
                <img src={exit}/>
            </button>
            <select id="topic-select" onChange={onTopicChange}>
                <option>WORRY</option>
                <option>GRATITUDE</option>
            </select>

            <h4 className="post-inst">of the day...</h4>

            <h4 className="post-inst">of the day</h4>

            <div className="post-full-wrap">
                    <textarea
                        value = {content}
                        onChange={onContentChanage}
                        placeholder="What's on your mind?"
                        className="post-container"
                    ></textarea>
            </div>
            <button className="publish-button" onClick={(event) => {
                event.preventDefault();
                const post = {
                    author : author,
                    content : content,
                    topic : topic
                }
                setContent("");
                navigate("/feed");
                makePost(post);
                navigate("/feed")

            }}>PUBLISH</button>
        </>
    )
}

export default NewPost