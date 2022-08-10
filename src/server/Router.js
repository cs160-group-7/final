import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound"
import React from "react";
import {Container} from "reactstrap"
import Meditation from "../Component/Meditation";
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import Feed from "../pages/Feed"
import MessageHome from "../pages/MessageHome";
import MessageCompose from "../pages/MessageCompose";
import MessageInbox from "../pages/MessageInbox";
import MessageSpecific from "../pages/MessageSpecific";
import NewPost from "../pages/NewPost";
import PostDetail from "../pages/PostDetail";
import MeditationHome from "../pages/MeditationHome";
import MeditationWaiting from "../pages/MeditationWaiting";

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<SamplePage />} />
                <Route exact path = "/meditation" element={<Meditation />} />
                <Route exact path = "/" element={<Welcome />} />
                <Route exact path = "/home" element={<Home />} />
                <Route exact path = "/feed" element={<Feed />} />
                <Route exact path = "/message" element={<MessageHome />} />
                <Route exact path = "/message/compose" element={<MessageCompose />} />
                <Route exact path = "/message/inbox" element={<MessageInbox />} />
                <Route path= "/feed/:id" element={<PostDetail />} />
                <Route path= "/feed/post" element={<NewPost />} />
                <Route path="/exercise" element = {<MeditationHome /> } />
                <Route path="/exercise/waiting" element = {<MeditationWaiting /> } />
                <Route path = "*"default element={<PageNotFound />} />
                <Route path= "/message/:id" element={<MessageSpecific />} />
            </Routes>
            </Container>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter
