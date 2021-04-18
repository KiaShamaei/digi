
import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-5">
            <ul className="navbar-nav  mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="#"  >خانه <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#" >خدمات</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="#" >درباره ما </Link>
                </li>
            </ul>
    </nav>
      );
}
 
export default Footer;