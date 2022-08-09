import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound"
import React from "react";
import {Container} from "reactstrap"
import SamplePage from "../pages/SamplePage"
import MessageCompose from "../pages/MessageCompose";

import MessageHome from "../pages/MessageHome";

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<SamplePage />} />
                <Route exact path = "/messagehome" element={<MessageHome/>} />
                <Route exact path = "/messagehome/compose" element={<MessageCompose/>} />
                <Route path = "*"default element={<PageNotFound />} />
            </Routes>
            </Container>
          </Router>
        </Container>
        </>
      )
}
export default AppRouter