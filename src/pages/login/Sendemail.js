import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"
import BackgroundImage from '../../images/image01.jpg';

const  Sendmail =()=> {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h5>Please check your email, We have sent a confirmation mail to your email.</h5>
                <br/>
                <Link to="/">Back to Login</Link>.
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
export default Sendmail
