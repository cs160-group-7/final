import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getPostOf, makeComment } from "../server/Server";
import {getAllCommentsOf} from "../server/Server";
import FeedHeader from "../Components/FeedHeader";
import PostDetailHeader from "../Components/PostDetailHeader";

const PostDetail = () => {
    const location = useLocation();
    const { pid } = location.state;
    const [author, setAuthor] = useState("")
    const [topic, setTopic] = useState("")
    const [content, setContent] = useState("")
    const [likes, setLikes] = useState(0)
    const [comments, setComments] = useState([])
    const [showCommentUI, setShowCommentUI] = useState(false)
    const [commentDetail, setCommentDetail] = useState("")
    const navigate = useNavigate();

    const onCommentDetailChange = (event) => {
        const {target : {value}} = event;
        setCommentDetail(value);
    }

    useEffect(() => {
        getPostOf(pid).then(post => {
            const data = post.data()
            setAuthor(data.author)
            setContent(data.content)
            setLikes(data.likes)
        })
        getAllCommentsOf(pid).then(comment => {
            setComments(comment)
        })
    },[])

    return (
        <>
            <PostDetailHeader/>
            {showCommentUI ?
                <>
                    <textarea
                        value = {commentDetail}
                        onChange={onCommentDetailChange}
                        placeholder="What's on your mind?"
                    ></textarea>
                    <button className="publish-comment-button" onClick={() => {
                        const comment = {
                            author : "1",
                            content : commentDetail,
                            belongsTo : pid
                        }
                        makeComment(comment)
                        setShowCommentUI(false)
                    }}>Post</button>
                </>
                :
                <>
                    topic : {topic}
                    content: {content}
                    likes: {likes}
                    comments: {comments.map((comment) => (
                        <div key = {comment.id}>
                        <div>Author: {comment.data().author}</div>
                        <div>Content: {comment.data().content}</div>
                    </div>
                ))}
                    <button className="reply-button" onClick={() => setShowCommentUI(true)}>reply</button>
                </>
            }
        </>
    )
}

export default PostDetail