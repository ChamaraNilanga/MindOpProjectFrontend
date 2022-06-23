import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "../login/login.css"
import BackgroundImage from '../../images/image01.jpg';
import { useState } from 'react';
import axios from 'axios';

const  ForgetPasswordPage =()=> {
    const[email, setemail] = useState('');
    const navigate = useNavigate();

    function sendmail(id) {
        axios.get(`http://localhost:8070/userdetails/emailconfirm/${id}`).
        then((res)=>{
         console.log(res);
         let vlid=res.data
         if (vlid=='Email valid') {
            navigate(`/sendemail`)
        }else{
            navigate(`/sendmailw`)
            // window.location.reload()
        }
      }).catch((err)=>{
       console.log(err);
       })
       }


    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h2>Forgot Password</h2>
            <h5>To reset your password, submit your username or your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</h5>
            
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input onChange={(e) => {setemail(e.target.value)}} type="email" name="email" required />
                </p>
                <br/>
                    <button onClick={() => {sendmail(email)}} id="sub_btn" >Send password reset email</button>    
                <br/>
                <Link to="/">Back to Login</Link>
            </form>
        </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
export default ForgetPasswordPage
