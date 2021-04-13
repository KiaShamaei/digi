import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Wrapper from './Wrapper';
import Main from './component/container/Main/Main';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login'
import AboutUs from "./component/AboutUs/AboutUs";
import Services from "./component/Services/Services";
import Register from "./component/Register/Register";

function App() {

  return (
    <Wrapper>
      <Router>
        <Header />
        <Route path="/login" component={Login}  />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/" component={Main} exact />
        <Footer />
      </Router>
    
    </Wrapper>
  );
}

export default App;
