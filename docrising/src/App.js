import React, { useRef} from "react";
import { HashRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import logo from './logo.jpeg';

import "./App.css";

const App = () => {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

    return (

      <>
      <div className="LogoSec">
      <div className="split">
      <div className="CompName">
      <span>Welcome to</span>
      <span>Doc</span><span>Rising</span>
      </div>
      <center><button className="scrollButton" onClick={handleClick}>Login as Doctor</button></center>
      </div>
      </div>
      

      <Router basename="/">
        <div className="App">
          <div className="appAside">
          
          
        <center>  <img src={logo} alt="Logo" /> </center>
          
            </div>
            
          <div className="appForm">
          
            <div ref={ref} className="formTitle">
              <NavLink
                to="/"
                activeclassname="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>
              or{" "}
              <NavLink
                to="/sign-up"
                activeclassname="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>{" "}
              
            </div>
            <Routes>
            <Route exact path="/" Component={SignInForm} />
            <Route path="/sign-up" Component={SignUpForm} />
            </Routes>
          </div>
          </div>
    
      </Router>

      </>
    );
  }

export default App;
