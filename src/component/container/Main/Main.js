

import React from 'react';
import usersIcon from '../../../assets/users.svg';
import './Main.css'

const Main = () => {
    return ( 
    <div className="main container">
        <div className="row">
            <div className="col-12 mt-5 text-center">
                <h2 className=" text-primary display-3 "> هلثی <h2 className="text-success d-inline display-3">استایل</h2></h2>
                <p className="text-bold"> دراینجا شما می توانید به روشهای مختلف به خدمات با کیفیت دسترسی پیدا کنید </p>
                <button className="btn btn-outline-success mt-5 t">همین امروز شروع کنید </button>
                <h2 className="mt-5 text-muted">چرا هلثی استایل ؟</h2>
            </div>
        </div>
        <div className="row text-center mt-5 justify-content-center">
            <div className="col-md-3  border m-1 ">
            <img src={usersIcon} alt="users" height={150} width={150} className="do-filter" />

            </div>
            <div className="col-md-3 border m-1">
            <img src={usersIcon} alt="users" height={150} width={150} className="do-filter" />

            </div>
            <div className="col-md-3 border m-1">
            <img src={usersIcon} alt="users" height={150} width={150} className="do-filter" />

            </div>
        </div>
    </div> );
}
 
export default Main;