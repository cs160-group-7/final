import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection,where, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";

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

// Assert
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}

function assertFieldExists(object, field) {
    try {
        assert(field in object, `Cannot find ${field} in object`)
    } catch(exception) {
        throw new Error()
    }
}

/**
 * This Funtion returns all Post Object from the server
 * @returns {List<Post>}
 */
export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
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
 * @param {UUID}
 * @returns {List<Post>}
 */

export const getPostsBy = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "posts"), where("author", "==", uuid));
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
 * @param {UUID}
 * @returns {List<Post>}
 */
 export const getPostsExcept = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "posts"), where("author", "!=", uuid));
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
 * returns false if the operation failed.
 * @param {Post}
 * @returns {Boolean}
 */
export const makePost = async (post) => {
    makePostHelper("posts", post)
}

/**
 * make Comment using the Comment Object
 * return true if the operation was successful.
 * @param {Comment}
 * @returns {Boolean}
 */
export const makeComment = async(comment) => {
    makeCommentHelper("comments", comment)
}

/**
 * get All Comments filtered by the UUID of the post
 * @param {UUID}
 * @returns {List<Comments>}
 */
 export const getAllComentOf = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "comments"), where("belongsTo", "==", uuid));
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
 * @param {UUID}
 * @returns {boolean}
 */
export const like = async (uuid) => {
    const docRef = doc(db, "posts", uuid);
    try {
        const docSnap = await getDoc(docRef);
        const likes = docSnap.data().likes
        updateDoc(docRef, {"likes" : likes + 1})
        return true;
    } catch(error) {
        console.log(error)
        return false;
    }
}


// Helper Functions 
export const makePostHelper = async (bucket, post) => {
    try {
        assertFieldExists(post,"author")
        assertFieldExists(post,"content")
        assertFieldExists(post,"topic")
        post.likes = 0
        post.createdAt = Date.now();
        const docRef = await addDoc(collection(db, bucket), post);
        console.log("Document written with ID: ", docRef.id);
        return true;
      } catch (exception) {
        return false;
      }
}



export const makeCommentHelper = async (bucket, comment) => {
    try {
        assertFieldExists(comment,"author")
        assertFieldExists(comment,"content")
        assertFieldExists(comment,"belongsTo")
        const docRef = await addDoc(collection(db, bucket), comment);
        console.log("Document written with ID: ", docRef.id);
        return true
      } catch (exception) {
        return false
      }
}