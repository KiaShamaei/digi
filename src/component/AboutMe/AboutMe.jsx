import React, { useEffect, useState } from 'react';
import axios from "../../Api/api";
import { getUser } from "../../functions/common";
import NotAutorized from '../Error/NotAuthorized';



const AboutMe = () => {

    let [users, setUsers] = useState([]);
    useEffect(() => {

        axios.post("userinfo", getUser())
            .then(res => setUsers(res.data.name))


    }, [])


    return (
       
            <NotAutorized address={(users.length !== 0) ? "/admin" : "/login"} />
        
    );
}

export default AboutMe;