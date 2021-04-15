import React, { useState } from 'react';
import { Link , useHistory} from "react-router-dom";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ValidateEmail, IsIranPhone, IsPassword } from '../../functions/validations';
import "./Register.css"
// import url from '../../Api/api';
import axios from '../../Api/api';
//import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [emailAddress, setEmailAdress] = useState("");
    const [password, setPassword] = useState("");
    const [insert, setInsert] = useState();
    const [show, setShow] = useState(false);
    
    const history = useHistory();

    function validateForm() {

        return emailAddress.length && password.length > 0 && mobile.length > 0 && firstName.length > 0;
    }
    const handleClose = () =>setShow(false);
    const handleShow = () =>setShow(true);
    const handleGotoLogin = () =>{
        setShow(false);
        history.push("/");
    }

    function handleSubmit(event) {

        event.preventDefault();
        const users = {
            name: firstName,
            family: lastName,
            mobileNumber: mobile,
            email: emailAddress,
            password: password,
            createDate: "0001-01-01T00:00:00",
            isActive: "true",
            userTypeId: 1


        }
   
      const d=JSON.stringify(users);
      console.log(d);
        axios.post("adduser",users)
            .then(res => {
               console.log(res)
                if (res.status == 200) {
                    if (res.data == "Success") {
                        setInsert("ثبت نام با موفقیت انجام شد.")
                        handleShow();
                        
                    } else if (res.data == "Failed") {
                        setInsert("خطا در ثبت اطلاعات ");
                        handleShow();
                    } else {
                        setInsert("شما قبلا ثبت نام کرده اید")
                        handleShow();
                    }


                } else {
                    setInsert("خطا در ارسال ")
                }
            })


    }




    return (
        <div className="Register">
            <Form onSubmit={handleSubmit}>
                <h3 className="my-5">ثبت نام</h3>

                <Form.Group size="lg" controlId="email">
                    <Form.Label>نام</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={firstName}
                        placeholder="نام"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label> نام خانوادگی</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        placeholder="نام خانوادگی"
                        onChange={(e) => setLastName(e.target.value)}
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label> شماره موبایل</Form.Label>
                    <Form.Control
                        type="text"
                        value={mobile}
                        placeholder=" شماره موبایل"
                        onChange={(e) => {
                            setMobile(e.target.value)
                            IsIranPhone(e, document.getElementById("validMobile"))

                        }
                        }
                    />

                    <Form.Text className="text-danger" id="validMobile">

                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label> ایمیل</Form.Label>
                    <Form.Control
                        type="text"
                        value={emailAddress}
                        placeholder="ایمیل"
                        onChange={(e) => {
                            setEmailAdress(e.target.value)
                            ValidateEmail(e, document.getElementById('validEmail'))
                        }
                        }
                    />
                    <Form.Text className="text-danger" id="validEmail"></Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label> رمز</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="رمز"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            IsPassword(e, document.getElementById("validPassword"))
                        }}
                    />
                    <div id="validPassword" className="text-danger"></div>
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    ورود
            </Button>
                <p className="forgot-password text-right">
                    ثبت نام کرده ام <Link to="/login">ورود؟</Link>
                </p>
            </Form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ثبت نام </Modal.Title>
                </Modal.Header>
                <Modal.Body>{insert}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleGotoLogin}>
                        خانه 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>);
}

export default Register;