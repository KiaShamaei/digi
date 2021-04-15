import React, { useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import axios from "./Api/api";
import Header from './component/Header/Header';
import Wrapper from './Wrapper';
import Main from './component/container/Main/Main';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login'
import AboutUs from "./component/AboutUs/AboutUs";
import Services from "./component/Services/Services";
import AboutMe from './component/AboutMe/AboutMe';
import Register from "./component/Register/Register";
import {getUser , removeUserSession ,getToken ,setUserSession} from "./functions/common";

function App() {
  const [user,setUser] = useState("");
  let userAccept = getUser();

;
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    
  }

  return (
    <Wrapper>
      <Router>
        <Header />
        <Route path="/login" component={Login}  />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/aboutme" component={AboutMe} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/" component={Main} exact />
        <Footer />
      </Router>
    
    </Wrapper>
  );
}

export default App;
