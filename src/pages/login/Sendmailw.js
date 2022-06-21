import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"
import BackgroundImage from '../../images/image01.jpg';

const  Sendmailw =()=> {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h5>Your search did not return any results. Please try again with other information.</h5>
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
export default Sendmailw
