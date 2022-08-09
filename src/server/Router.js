import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound"
import React from "react";
import {Container} from "reactstrap"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import Feed from "../pages/Feed"
import MessageHome from "../pages/MessageHome";
import MessageCompose from "../pages/MessageCompose";
import Post from "../Components/Post"
import NewPost from "../pages/NewPost";

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
                <Route path= "/feed/:id" element={<Post />} />
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
