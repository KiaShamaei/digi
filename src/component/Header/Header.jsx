import React , {useContext}from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth-context";



import './Header.css';


const Header = () => {
    const authContext = useContext(AuthContext);
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light body ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                
                <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"  >خانه <span className="sr-only">(current)</span></Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services" >خدمات</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/aboutus" >درباره ما </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/aboutme" >درباره من </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/shop" >فروشگاه </Link>
                    </li>
                </ul>

            </div>
            
           
             <Link className="navbar-brand " to="/login" >{authContext.auth ?"خوش آمدید" : "ورود / ثبت نام "}</Link>
            
           
        </nav>
       

    );
}

export default Header;