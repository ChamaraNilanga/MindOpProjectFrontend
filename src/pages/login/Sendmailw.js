import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"

const  Sendmailw =()=> {
    return (
        <div className="text-center m-5-auto">
            <form className='login' action="/login">
            <h5>Your search did not return any results. Please try again with other information.</h5>
                <br/>
                <Link to="/">Back to Login</Link>.
            </form>
        </div>
    )
}
export default Sendmailw
