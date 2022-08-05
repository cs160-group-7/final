import {makeCommentHelper, makePostHelper} from "../javascript/Server"

const testMakePost = async() => {
    const flawPostObj = {
        author : "Wonjae Lee"
    }

    const nicePostObj = {
        author : "Wonjae Lee",
        topic : "topic",
        content : "content"
    }

    if(await makePostHelper("testPosts", nicePostObj) !== true) {console.error("testMakePost failed")}
    if(await makePostHelper("testPosts", flawPostObj) !== false) {console.error("testMakePost failed")}
}

const testMakeComment = async() => {
    const flawCommentObj = {
        author : "Wonjae Lee"
    }

    const niceCommentObj = {
        author : "Wonjae Lee",
        content : "topic",
        belongsTo : "112312321321313"
    }

    if(await makeCommentHelper("testComments", niceCommentObj) !== true) {console.error("testMakeComment failed")}
    if(await makeCommentHelper("testComments", flawCommentObj) !== false) {console.error("testMakeComment failed")}

}
export const runTests = () => {
    testMakePost();
    testMakeComment();
}