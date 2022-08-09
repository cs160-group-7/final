import React, {useEffect, useState} from "react"
import "../styles/post.css"
import {getPostOf} from "../server/Server";

const Post = (props) => {

    const [author, setAuthor] = useState("")
    const [likes, setLikes] = useState(0)
    const [content, setContent] = useState("")
    const [pid, setPid] = useState(props.pid)

    useEffect(() => {
        getPostOf(pid).then(post => {
            const data = post.data()
            setAuthor(data.author)
            setContent(data.content)
            setLikes(data.likes)
        });
    },[])

    return (
        <>
            <div id = "post-content">
                {content}
            </div>
            <div id = "post-author">
                {author}

            </div>
            <div id = "post-likes" >
                {likes}
            </div>
            <div id = "post-comments">
                12
            </div>
        </>
    )
}

export default Post