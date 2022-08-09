import React, {useState, useEffect} from "react"
import FeedHeader from "../Components/FeedHeader";
import "../styles/feed.css"
import {Container, Row} from "reactstrap";
import {Link, useNavigate} from "react-router-dom";
import {getPosts} from "../server/Server";
import Post from "../Components/Post"

const Feed = () => {

    const [showYours, setShowYours] = useState(true)
    const [posts, setPosts] = useState([]);
    const MY_ID = "1"
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
            <FeedHeader/>
            <Row>
                <button id="friends" onClick = {() => onFriendsClick()}>
                    FRIENDS
                </button>
                <button id="yours" onClick = {() => onYoursClick()}>
                    YOURS
                </button>
            </Row>
            <Container id = "post-view">
                {
                    showYours ?
                        <>
                            {posts
                                .filter((post) => post.author === MY_ID )
                                .map((post) => (
                                <div className = "post" key = {post.id}>
                                    <Link to = {`/feed/${post.id}`}>
                                        <Post pid ={post.id}/>
                                    </Link>
                                </div>
                            ))}
                        </>
                        :
                        <>
                            {posts
                                .filter((post) => post.author !== MY_ID )
                                .map((post) => (
                                <div className = "post" key = {post.id}>
                                    <Link to = {`/feed/${post.id}`}>
                                        <Post pid ={post.id}/>
                                    </Link>
                                </div>
                            ))}
                        </>
                }
            </Container>
            <button className="post-button" onClick={()=>navigate("/feed/post")}>ADD POST</button>
        </>
    )
}

export default Feed