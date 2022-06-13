import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"

const  Sendmail =()=> {
    return (
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h5>Please check your email, We have sent a confirmation mail to your email.</h5>
                <br/>
                <Link to="/">Back to Login</Link>.
            </form>
        </div>
    )
}
export default Sendmail
