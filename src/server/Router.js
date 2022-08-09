import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "../Component/PageNotFound"
import App from "../App"
import React from "react";
import {Container} from "reactstrap"
import SamplePage from "../Component/SamplePage"
import Meditation from "../Component/Meditation";

const AppRouter = () => {

    return (
        <>
        <Container id = "Router">
          <Router>
            <Container id = "content">
            <Routes>
                <Route exact path = "/" element={<Meditation />} />
                <Route exact path = "/" element={<SamplePage />} />
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