import {makeCommentHelper, makePostHelper} from "../javascript/Server"

const testMakeFalsyPost = async() => {
    const flawPostObj = {
        author : "Wonjae Lee"
    }
    
    console.log(await makePostHelper("testPosts", flawPostObj) === false)

}

const testMakeNiceComment = async() => {
    const niceCommentObj = {
        author : "Wonjae Lee",
        content : "topic",
        belongsTo : "112312321321313"
    }
    
    console.log(await makeCommentHelper("testComments", niceCommentObj) === true)
}

const testMakeFalsyComment = async() => {
    const flawCommentObj = {
        author : "Wonjae Lee"
    }

    console.log(await makeCommentHelper("testComments", flawCommentObj) === false)

}

const testMakeNicePost = async() => {
    const nicePostObj = {
        author : "Wonjae Lee",
        topic : "topic",
        content : "content"
    }
    
    console.log(await makePostHelper("testPosts", nicePostObj) === true)
}

export const runTests = () => {
    testMakeFalsyPost();
    testMakeNicePost();
    testMakeFalsyComment();
    testMakeNiceComment();
}