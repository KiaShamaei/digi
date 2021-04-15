import React, { useEffect, useState } from 'react';
import axios from "../../Api/api";
import { getUser, getToken } from "../../functions/common";


const AboutMe = () => {

    let [users, setUsers] = useState([]);
    useEffect(() => {
      
        axios.post("userinfo",getUser())
        .then(res => setUsers(res.data.name))

        
    }, [])
    return (

        <h1>{users}

        </h1>

    );
}

export default AboutMe;