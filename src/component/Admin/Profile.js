import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";


import AdminSideBar from './AdminSidebar';
import EditProfile from './EditProfile';
import Tables from './Tables';






const Profile = () => {
    return (
       
        <Router>
             <div className="row">
            <div className="col-md-2">
            <AdminSideBar />
            </div>
            <div className="col-md-10">
            <Switch>
                <Route exact path="/admin/editprofile">
                    <EditProfile />
                </Route>
                <Route path="/admin/table">
                    <Tables />
                </Route>
            </Switch>
                
            </div>
        </div>
        </Router>
    );
}

export default Profile;