import React from "react"

const Comment = (props) => {
    const comment = props.comment

    return (
        <>
            <div className="comment-author">
                {comment.author}
            </div>
            <div className="comment-body">
                {comment.content}
            </div>
        </>
    )

}

export default Comment