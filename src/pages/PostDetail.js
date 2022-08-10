import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getPostOf, makeComment } from "../server/Server";
import {getAllCommentsOf} from "../server/Server";
import PostDetailHeader from "../Components/PostDetailHeader";
import Comment from "../Components/Comment";
import Heart from "../assets/heart.svg"

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
            <PostDetailHeader headerName="POST"/>
            <div id = "post-detail-wrapper">
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
                    <div id = "post-detail-content-wrapper">
                        <span className="post-detail-content">{content}</span>
                        <div className="post-detail-stats">
                            <img src={Heart} className="comment-stat-icon"/>
                            <span>{likes}</span>
                        </div>
                    </div>
                    {/* likes: {likes} */}
                    {comments.map((comment) => (
                        <Comment comment = {comment.data()}/>
                    ))}
                    <button className="back-button" onClick={()=>navigate("/feed")}>back</button>
                </>
            }
        </div>
            </>
    )
}

export default PostDetail