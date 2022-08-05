import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection,where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALs5yvnMRxJdw42Dbq1kXwynjlyJZ67So",
    authDomain: "cs160final-5b867.firebaseapp.com",
    projectId: "cs160final-5b867",
    storageBucket: "cs160final-5b867.appspot.com",
    messagingSenderId: "1012297394586",
    appId: "1:1012297394586:web:f00525a030cfe68449f223",
    measurementId: "G-ESRLGNL40C",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * This Funtion returns all Post Object from the server
 * @returns List<Post>
 */
export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    const snapShotDocs = querySnapshot.docs
    const posts = []
    snapShotDocs.forEach(element => {
        const post = {
            id : element.id,
            ...element.data(), 
        };
        posts.push(post)
    });
    console.log(posts)
    return posts
}

/**
 * This Funtion returns all Post Object from the server by the user
 * filtered by the designated user's uuid.
 * @param UUID
 * @returns List<Post>
 */

export const getPostsBy = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "Posts"), where("author", "==", uuid));
    const snapShotDocs = querySnapshot.docs
    const posts = []
    snapShotDocs.forEach(element => {
        const post = {
            id : element.id,
            ...element.data(), 
        };
        posts.push(post)
    });
    console.log(posts)
    return posts
}

/**
 * This Funtion returns all Post Object from the server Except the designated user's uuid.
 * @param UUID
 * @returns List<Post>
 */
 export const getPostsExcept = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "Posts"), where("author", "!=", uuid));
    const snapShotDocs = querySnapshot.docs
    const posts = []
    snapShotDocs.forEach(element => {
        const post = {
            id : element.id,
            ...element.data(), 
        };
        posts.push(post)
    });
    console.log(posts)
    return posts
}

/**
 * make post using the Post Object
 * return true if the operation was successful.
 * @param Post
 * @returns boolean
 */
const makePost = (post) => {
    return;
}


/**
 * make Comment using the Comment Object
 * return true if the operation was successful.
 * @param Comment
 * @returns boolean
 */
const makeComment = (Comment) => {
    return;
}

/**
 * get All Comments filtered by the UUID of the post
 * @param UUID
 * @returns List<Comments>
 */
 export const getAllComentOf = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "Comments"), where("belongsTo", "==", uuid));
    const snapShotDocs = querySnapshot.docs
    const comments = []
    snapShotDocs.forEach(element => {
        const comment = {
            id : element.id,
            ...element.data(), 
        };
        comments.push(comment)
    });
    return comments
}

/**
 * increase like of Post that matches UUID
 * return true if the operation was successful
 * 
 * @param UUID
 * @returns boolean
 */
const like = async (uuid) => {
    return null;
}
