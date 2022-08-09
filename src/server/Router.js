import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../Component/PageNotFound"
import App from "../App"
import React from "react";
import {Container} from "reactstrap"
import Welcome from "../Component/Welcome"
import Home from "../Component/Home"

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<Welcome />} />
                <Route exact path = "/home" element={<Home />} />
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