import React from "react"

const Comment = (props) => {
    const comment = props.comment

    return (
        <div className = "comment-in-detail">
            <div className="comment-author">
                {comment.data().author}
            </div>
            <div className="comment-body">
                {comment.data().content}
            </div>
        </div>
    )

}

export default Comment