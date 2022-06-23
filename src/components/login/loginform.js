import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Alert } from "react-bootstrap";
import axios from "axios";

function Loginform() {

    const[Username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const navigate = useNavigate();

    const senddata = async() => {
        console.log(Username)
        console.log(password)
    var data = {
    uid : Username,
    psswd : password
    }
    console.log(data)
    await axios.post("http://localhost:8070/userdetails/login", data)
    .then((res) => {
        console.log(res);
        let status=res.data
        let admin=res.data.admin
        let teacher=res.data.teacher
        let student=res.data.student
        let userid=res.data.userid
        console.log(status)
      
        if (status=='Invalid Credential') {
            setErr(true)
        }else{

            // const test=JSON.stringify(res.data)
            localStorage.setItem('admin',admin)
            localStorage.setItem('teacher',teacher)
            localStorage.setItem('student',student)
            localStorage.setItem('userid',userid)
            // localStorage.setItem('status',test)
            
            navigate(`/home`)
            window.location.reload()
        }
    }).catch((err)=>{
        console.log(err);
    });
}
    return (

        <div className="text-center m-5-auto">
            <div className='contain'>
            <div className = "login" >
            <h1>Sign in</h1>
                <p>
                    <label>Sign in and start your studies!</label><br/>
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" name="first_name" required placeholder="Username or E-mail" />
                </p>
                <p>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" required placeholder="Password"/>
                </p>
                {err ? (
          
          <Alert key="danger" variant="danger">
            Please check your credentials
          </Alert>
      
      ) : (
        <></>
      )}
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <p>
                    <button onClick={() => {senddata()}} id="sub_btn" >Login</button>
                </p>
                </div>
            </div>
        </div>
    )
}

export default Loginform




////////////////////////
