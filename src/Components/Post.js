import React, {useEffect, useState} from "react"
import "../styles/post.css"
import {getAllCommentsOf, getPostOf} from "../server/Server";
import Heart from "../assets/heart.svg"
import Comment from "../assets/comment.svg"
import homeicon from "../assets/message-home.svg";

const Post = (props) => {

    const [author, setAuthor] = useState("")
    const [likes, setLikes] = useState(0)
    const [content, setContent] = useState("")
    const [pid, setPid] = useState(props.pid)
    const [numOfComments, setNumOfComments] = useState(0)


    useEffect(() => {
        getPostOf(pid).then(post => {
            const data = post.data()
            setAuthor(data.author)
            setContent(data.content)
            setLikes(data.likes)
        });
        getAllCommentsOf(pid).then(comment => {
            setNumOfComments(numOfComments + 1)
        })
    },[])

    return (
        <>
            <div id = "post-content">
                {content}
            </div>
            <div id = "post-author">
                {author}

            </div>
            <div className = "post-stats" >
                <img src={Heart} className="comment-stat-icon"/>
                <span className="comment-stat-number">{likes}</span>
                <img src={Comment} className="comment-stat-icon-2"/>
                <span className="comment-stat-number-2"> {numOfComments}</span>
            </div>
        </>
    )
}

export default Post