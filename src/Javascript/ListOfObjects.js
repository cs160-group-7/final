/**
 * Feel Free to edit this Post object
 * createdAt: represents when the post was created
 * title: title of the post
 * topic: worry OR gratitude
 * likes: number of likes
 * author: author of the post
 * id : id of the post 
 */
 const Post = {
    createdAt : long,
    content : String,
    topic : String,
    likes : int,
    author : String,
    id : UUID
}

/**
 * represents the comment of the post
 * author : Author of the comment
 * content : content of the comment
 * createAt : represents when the post was created
 * belogsTo : represents which post the comment belongs to
 * id : id of the comment
 */
const Comment = {
    createdAt : long,
    author : String,
    content : String,
    belongsTo : UUID,
    id : UUID
}

/**
 * represents the user of the app
 * userName : userName of the user
 * password : password of the user
 */
const User = {
    userName : String,
    passWord : String,
    id : UUID
}