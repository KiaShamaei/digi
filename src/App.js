import React, { useState,useEffect, lazy ,Suspense} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';


import Wrapper from './component/container/Warpper/Wrapper';
import Main from './component/container/Main/Main';
import Login from './component/Login/Login'
import AboutUs from "./component/AboutUs/AboutUs";
import Services from "./component/Services/Services";
import AboutMe from './component/AboutMe/AboutMe';
import Register from "./component/Register/Register";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Spinner from './component/shared/Spinner'
import {getUser , removeUserSession ,getToken ,setUserSession} from "./functions/common";
import Profile from "./component/Admin/Profile";
 const Shop = lazy(()=>import ('../src/component/container/Layout/Layout'))
function App() {
//   const [user,setUser] = useState("");
//   let userAccept = getUser();

// ;
 
//   // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
    
//   }


  return (
    <Wrapper>
      <Router>
      <Header/>
      <Suspense fallback={<Spinner/>} >
        <Route path="/login" component={Login}  />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/aboutme" component={AboutMe} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/admin" component={Profile} />
        <Route path="/shop" component = {Shop} />
        <Route path="/" component={Main} exact />
        </Suspense>
        <Footer/>
      </Router>
    </Wrapper>
  );
}

export default App;
