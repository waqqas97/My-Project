import React from "react";
import "./app.scss"
import Login from "./Pages/Login/Login";
import HomeBanner from "./Pages/HomeBanner/HomeBanner";
import Home from "./Pages/Home/Home";
import Watch from "./Pages/Watch/Watch";
import Signup from "./Pages/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const user = false;
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <HomeBanner />
              {/* {user ? <Home /> : <Redirect to="/register"/>} */}
            </React.Fragment>
          } />
          <Route path="/homebanner" element={
            <React.Fragment>
              <HomeBanner />
              {/* {!user ? <Register /> : <Redirect to="/"/>} */}
            </React.Fragment>
          } />
          <Route path="/login" element={
            <React.Fragment>
              <Login />
              {/* {!user ? <Login /> : <Redirect to="/"/>} */}
            </React.Fragment>
          } />
          <Route path="/signup" element={
            <React.Fragment>
              <Signup />
              {/* {!user ? <Signup /> : <Redirect to="/"/>} */}
            </React.Fragment>
          } />
          <React.Fragment>
            <Route path="/movies" element={
              <React.Fragment>
                <Home type="movies" />
              </React.Fragment>
            } />
            <Route path="/series" element={
              <React.Fragment>
                <Home type="series" />
              </React.Fragment>
            } />
            <Route path="/watch" element={
              <React.Fragment>
                <Watch />
              </React.Fragment>
            } />
          </React.Fragment>
          {/* )} */}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
