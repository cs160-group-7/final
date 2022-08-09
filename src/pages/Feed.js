import React, {useState} from "react"
import FeedHeader from "../Components/FeedHeader";
import "../styles/feed.css"

const Feed = () => {

    const [showYours, setShowYours] = useState(true)

    return (
        <>
            <FeedHeader />
        </>
    )
}

export default Feed