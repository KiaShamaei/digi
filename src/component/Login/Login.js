import React, { useState } from "react";
import {useHistory} from "react-router-dom"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {setUserSession, setTest} from "../../functions/common";
import "./Login.css";
import axios from "axios";


export default function Login() {
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [auth,setAuth] = useState("");
    const history =useHistory();
    

    function validateForm() {
        return password.length > 0 && password.length > 0;
    }
    function handleLogin(event) {
      event.preventDefault();
      axios.get(`http://localhost:8080/loginuser?mobileNumber=${mobile}&password=${password}`)
      .then( (response)=> {
          debugger;
        //setTest("name",JSON.stringify(response.data.Family))
        setUserSession(response.data.token,response.data.userInfo);
        history.push('/admin');

        
      })

  }
   

    return (
        <div className="Login">
          
            <Form onSubmit={handleLogin}>
            <h3 className="my-5 text-center">ورود</h3>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>شماره موبایل</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                        لطفا شماره موبایل خود را وارد کنید .
                    </Form.Text>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>پسورد</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    ورود
                </Button>
                <p className="mt-2 text-muted"> <Link to="/register"> ثبت نام ،</Link>فراموشی رمز </p>
            </Form>
           
        </div>
    );
}