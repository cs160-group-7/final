import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound"
import React from "react";
import {Container} from "reactstrap"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import Feed from "../pages/Feed"
import MessageHome from "../pages/MessageHome";
import MessageCompose from "../pages/MessageCompose";
<<<<<<< HEAD
import MessageSpecific from "../pages/MessageSpecific";
=======
import MessageInbox from "../pages/MessageInbox";
import NewPost from "../pages/NewPost";
import PostDetail from "../pages/PostDetail";
>>>>>>> 5b5f9230cb7bc247c01906ef175bd5b5e0111739

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<Welcome />} />
                <Route exact path = "/home" element={<Home />} />
                <Route exact path = "/feed" element={<Feed />} />
                <Route exact path = "/message" element={<MessageHome />} />
                <Route exact path = "/message/compose" element={<MessageCompose />} />
                <Route exact path = "/message/inbox/specific" element={<MessageSpecific/>}/>
                {/* <Route path= "/posts/:id" /> */}
                <Route exact path = "/message/inbox" element={<MessageInbox />} />
                <Route path= "/feed/:id" element={<PostDetail />} />
                <Route path= "/feed/post" element={<NewPost />} />
                <Route path = "*"default element={<PageNotFound />} />
            </Routes>
            </Container>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter
