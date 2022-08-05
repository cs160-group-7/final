import {makePostHelper} from "../javascript/Server"
const expectPass = (func,...args) =>  {
    try {
        func(...args)
    } catch (exception) {
        return exception
    }
}

const expectFail = (func,...args) =>  {
    try {
        func(...args)
    } catch (exception) {
        console.log("catched")
    }
}

const testMakeFalsyPost = () => {
    const flawPostObj = {
        author : "Wonjae Lee"
    }

    if (expectFail(makePostHelper, "testPosts", flawPostObj) === Error) {
        console.log("testMakeFalsyPost success")
    } else {
        console.log("testMakeFalsyPost failed")
    }
}

const testMakeNicePost = () => {
    const flawPostObj = {
        author : "Wonjae Lee",
        topic : "topic",
        content : "content"
    }

    if (expectPass(makePostHelper, "testPosts", flawPostObj) !== Error) {
        console.log("testMakeNicePost success")
    } else {
        console.log("testMakeNicePost failed")
    }
}

export const runTests = () => {
    // testMakeFalsyPost();
    testMakeNicePost();
}