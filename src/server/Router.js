import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound"
import React from "react";
import {Container} from "reactstrap"
import Welcome from "../pages/Welcome"
import Home from "../pages/Home"
import MessageHome from "../pages/MessageHome";
import MessageCompose from "../pages/MessageCompose";

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<Welcome />} />
                <Route exact path = "/home" element={<Home />} />
                <Route exact path = "/messagehome" element={<MessageHome />} />
                <Route exact path = "/messagehome/compose" element={<MessageCompose />} />
                {/* <Route path= "/posts/:id" /> */}
                <Route path = "*"default element={<PageNotFound />} />
            </Routes>
            </Container>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter