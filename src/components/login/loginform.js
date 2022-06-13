import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Loginform() {

    const[Username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const senddata = async() => {
        console.log(Username)
        console.log(password)
    var axios = require('axios');
    var data = {
    uid : Username,
    psswd : password
    }
    await axios.post('http://localhost:8070/login',data)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}
    return (

        <div className="text-center m-5-auto">
            <div className='contain'>
            
            <form className = "login" action="/home">
            <h1>Sign in</h1>
                <p>
                    <label>Sign in and start your studies!</label><br/>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" name="first_name" required />
                </p>
                <p>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" required />
                </p>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <p>
                    <button onClick={senddata} id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            </div>
        </div>
    )
}

export default Loginform