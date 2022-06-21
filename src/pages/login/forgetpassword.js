import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"
import BackgroundImage from '../../images/image01.jpg';

const  ForgetPasswordPage =()=> {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h2>Forgot Password</h2>
            <h5>To reset your password, submit your username or your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</h5>
            
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <br/><Link to="/sendemail">
                    <button id="sub_btn" type="submit">Send password reset email</button>
                    </Link>
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
