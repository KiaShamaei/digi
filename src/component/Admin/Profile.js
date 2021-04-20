import React , { Suspense, lazy }from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Spinner from '../shared/Spinner';

import AdminSideBar from './AdminSidebar';


const EditProfile = lazy(()=> import('./EditProfile'));
const Tables = lazy(()=>import('./Tables'));
const Analytics = lazy(()=> import ('./Analytics'));





const Profile = () => {
    return (
       
        <Router>
             <div className="row">
            <div className="col-md-2">
            <AdminSideBar />
            </div>
            <div className="col-md-10">
            <Suspense fallback={<Spinner/>} >
            <Switch>
                <Route exact path="/admin/editprofile" component={EditProfile}/>
                <Route path="/admin/table" component={Tables}/>
                <Route path="/admin/analytics" component={Analytics} />
            </Switch>
            </Suspense>  
            </div>
        </div>
        </Router>
    );
}

export default Profile;