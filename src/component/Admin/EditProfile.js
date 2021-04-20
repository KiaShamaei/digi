
import React, { useEffect, useState } from 'react';
import axios from '../../Api/api'

const EditProfile = () => {
    const [username, setUsername] = useState('');
    const [userfamily, setUserfamily] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [userId ,setUserId] = useState('');
    function handleSubmit(event) {
        
        const users = {
            userId : userId,
            name: username,
            family: userfamily,
            mobileNumber: mobile,
            email: email,
            
            isActive: "true",
            bio:bio,
            Gender:gender
            
          


        }
        event.preventDefault();
        axios.post(`userinfo/updateuser`, users)
        .then( (response)=> {
            debugger;
            console.log(response)
          
  
          
        })
  
    }
    
    useEffect(() => {
        const mobileNumber=sessionStorage.getItem('user')
        
        axios.get(`userinfo/getuser?mobileNumber=${mobileNumber}`)
            .then(res => 
                {
                    console.log(res);
                    setUsername(res.data.name)
                    setUserfamily(res.data.family)
                    setMobile(res.data.mobileNumber)
                    setEmail(res.data.email)
                    setGender(res.data.gender)
                    setBio(res.data.bio)
                    setUserId(res.data.userId)
                    
                })


    }, [])
    return (
        <div className="row justify-content-center">
            <div className="col-9 justify-content-center ">
                <form className="form-horizontal mt-4" onSubmit={handleSubmit} >
                    <div id="div_id_username" className="form-group required">
                        <label htmlFor="id_username" className="control-label col-md-4  requiredField"> نام <span className="asteriskField">*</span> </label>
                        <div className="controls col-md-8 ">
                            <input className="input-md  textinput textInput form-control mb-1" 
                            id="id_username" name="username" placeholder="نام ..." type="text"
                            value={username} 
                            onChange={(e)=> setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div id="div_id_username" className="form-group required">
                        <label htmlFor="id_userfamily" className="control-label col-md-4  requiredField"> نام خانوادگی<span className="asteriskField">*</span> </label>
                        <div className="controls col-md-8 ">
                            <input className="input-md  textinput textInput form-control mb-1"
                             id="id_userfamily" name="userfamily" placeholder="نام خانوادگی..." type="text" 
                             value={userfamily}
                             onChange={(e)=> setUserfamily(e.target.value)}
                             />
                        </div>
                    </div>
                    <div id="div_id_mobile" className="form-group required">
                        <label htmlFor="id_mobile" className="control-label col-md-4  requiredField"> شماره موبایل<span className="asteriskField">*</span> </label>
                        <div className="controls col-md-8 ">
                            <input className="input-md emailinput form-control mb-1" id="id_mobile" name="mobile"
                             placeholder="موبایل..." type="tel"
                             value = {mobile}
                             onChange={(e)=> setMobile(e.target.value)}
                             />
                        </div>
                    </div>
                    <div id="div_id_email" className="form-group required">
                        <label htmlFor="id_email" className="control-label col-md-4  requiredField"> ایمیل<span className="asteriskField">*</span> </label>
                        <div className="controls col-md-8 ">
                            <input className="input-md emailinput form-control mb-1" 
                            id="id_email" name="email" placeholder="ایمیل..." type="email"
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div id="div_id_bio" className="form-group required">
                        <label htmlFor="id_bio" className="control-label col-md-4  requiredField"> بیوگرافی<span className="asteriskField">*</span> </label>
                        <div className="controls col-md-8 ">
                            <input className="input-md  textinput textInput form-control mb-1" 
                            id="id_bio" name="bio"  placeholder="توضیحات" type="text" 
                            value={bio}
                            onChange={(e)=> setBio(e.target.value)}
                            />
                        </div>
                    </div>
                    <div id="div_id_gender" className="form-group required">
                        <label htmlFor="id_gender" className="control-label col-md-4  requiredField"> جنسیت<span className="asteriskField">*</span> </label>
                        <div className="controls col-md-4 ">
                            <select className="input-md  textinput textInput form-control mb-1" id="id_gender" name="gender" value={gender}
                            onChange={(e)=> setGender(e.target.value)}
                            >
                                <option value="1">مرد</option>
                                <option value="2">زن</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-secondary" type="submit">اصلاح</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default EditProfile;