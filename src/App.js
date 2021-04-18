import React, { useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import axios from "./Api/api";

import Wrapper from './component/container/Warpper/Wrapper';
import Main from './component/container/Main/Main';
import EditProfile from './component/Admin/EditProfile'
import Login from './component/Login/Login'
import AboutUs from "./component/AboutUs/AboutUs";
import Services from "./component/Services/Services";
import AboutMe from './component/AboutMe/AboutMe';
import Register from "./component/Register/Register";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import {getUser , removeUserSession ,getToken ,setUserSession} from "./functions/common";
import Profile from "./component/Admin/Profile";
import Tables from "./component/Admin/Tables";

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
      <Header/>
        <Route path="/login" component={Login}  />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/aboutme" component={AboutMe} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/admin" component={Profile} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/admin/editprofile" component={EditProfile} exact />
        <Route path="/admin/table" component={Tables} exact />
        <Route path="/admin/analytics" component={Register} exact />
        <Route path="/" component={Main} exact />
        <Footer/>
      </Router>
    </Wrapper>
  );
}

export default App;
