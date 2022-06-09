import React from 'react'
import { Link } from 'react-router-dom'
import "../login/login.css"

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            
            <form action="/home">
            <h1>Sign in</h1>
                <p>
                    <label>Sign in and start your studies!</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <input type="password" name="password" required />
                </p>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}
