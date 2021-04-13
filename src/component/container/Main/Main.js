

import React from 'react';
import usersIcon from '../../../assets/users.svg';
import timer from '../../../assets/timer.svg';
import cup from '../../../assets/Cup.svg';
import './Main.css'
import MainFold2 from '../../MainFold2/MainFold2'

const Main = () => {
    return (
        <>
        <div className="main container">
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h2 className=" text-success display-3 "> هلثی </h2> <h2 className="   text-primary d-inline display-3">استایل</h2>
                    <p className="text-bold"> دراینجا شما می توانید به روشهای مختلف به خدمات با کیفیت دسترسی پیدا کنید </p>
                    <button className="btn btn-success mt-5 t">همین امروز شروع کنید </button>
                    <h2 className="mt-5 text-muted">چرا هلثی استایل ؟</h2>
                </div>
            </div>
            <div className="row text-center mt-5 justify-content-center">
                <div className="col-md-3 border m-1">

                    <img src={cup} alt="cup" height={150} width={150} className="do-filter" />
                    <p className="text-muted text-center "> ساده رو راحت</p>
                </div>
                <div className="col-md-3 border m-1">

                    <img src={timer} alt="timer" height={150} width={150} className="do-filter" />
                    <p className="text-muted text-center ">مقرون به صرفه و سریع </p>
                </div>
                <div className="col-md-3  border m-1 ">

                    <img src={usersIcon} alt="users" height={150} width={150} className="do-filter" />
                    <p className="text-muted text-center"> دسترسی به راه حل های متفاوت </p>
                </div>
            </div>
        </div>
        <MainFold2/>
        
        </>
        );
}

export default Main;