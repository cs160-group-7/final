import React, {useState, useEffect} from "react"
import FeedHeader from "../Components/FeedHeader";
import "../styles/feed.css"
import {Container, Row} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import {getPosts} from "../server/Server";
import Post from "../Components/Post"
import noPost from "../assets/noPost.svg"

const Feed = () => {

    const [showYours, setShowYours] = useState(true)
    const [posts, setPosts] = useState([]);
    const MY_ID = "Wonjae"
    const navigate = useNavigate();

    useEffect(() => {
        getPosts().then(post => {
            setPosts(post)
        })
    }, [])

    const onFriendsClick = () => {
        setShowYours(false)
        console.log(showYours)
    }
    const onYoursClick = () => {
        setShowYours(true)
        console.log(showYours)
    }

    return (
        <>
            <FeedHeader headerName = "FEED"/>
            <Row>
                <button className="feed-filter" id = "friends" onClick = {() => onFriendsClick()}>
                    FRIENDS
                </button>
                <button className="feed-filter" id = "yours" onClick = {() => onYoursClick()}>
                    YOURS
                </button>
            </Row>
            <Container id = "post-view">
                {
                    showYours ?
                        <div id = "posts">
                            {posts.filter((post) => post.data().author === MY_ID ).length > 0 ?
                                posts
                                .filter((post) => post.data().author === MY_ID )
                                .map((post) => (
                                <div className = "post-wrapper" key = {post.id}>
                                    <Link to = {`/feed/${post.id}`} state={{ pid: post.id }}>
                                        <Post pid ={post.id}/>
                                    </Link>
                                </div>
                            )) :
                                <img src = {noPost} className="posted-nothing"/>
                            }
                        </div>
                        :
                            <div id = "posts">
                            {posts
                                .filter((post) => post.data().author !== MY_ID )
                                .map((post) => (
                                <div className = "post-wrapper" key = {post.id}>
                                    <Link to = {`/feed/${post.id}`} state={{ pid: post.id }}>
                                        <Post pid ={post.id}/>
                                    </Link>
                                </div>
                            ))}
                            </div>
                }
            </Container>
            <button className="post-button" onClick={()=>navigate("/feed/post")}>ADD POST</button>
        </>
    )
}

export default Feed