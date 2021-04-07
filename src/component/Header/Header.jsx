import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light body ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                
                <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"  >خانه <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >خدمات</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#" >درباره ما </a>
                    </li>
                </ul>

            </div>
            <a className="navbar-brand " href="#" >ورود / ثبت نام</a>
        </nav>
    );
}

export default Header;