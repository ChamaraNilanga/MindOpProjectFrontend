import React, { useState } from 'react'

function Createusers() {

    const[Userroll, setUserroll] = useState('');
    const[Username, setUsername] = useState('');
    const[Uid, setUid] = useState('');
    const[Password, setPassword] = useState('');
    const[Email, setEmail] = useState('');
    const[Phone_no, setPhone_no] = useState('');
    const[City, setCity] = useState('');
    const[Gender, setGender] = useState('');
    const[Admin, setAdmin] = useState(false);
    const[teacher, setteacher] = useState(false);
    const[student, setstudent] = useState(false);    


   


    const printData = async() => {
    var axios = require('axios');

    {Userroll=='admin'?
    setAdmin(true)
    :Userroll=='teacher'?
    setteacher(true)
    :Userroll=='student'?
    setstudent(true):alert('invalid useer role') } 

    var data = {
    
        uid : Uid,
        usernam : Username,
        gen : Gender,
        email : Email,
        psswd : Password,
        city : City,
        contactno : Phone_no,
        admin : Admin,
        tcher : teacher,
        stdnt : student
    }
    console.log(data.admin)
    console.log(data.tcher)
    console.log(data.stdnt)
    await axios.post("http://localhost:8070/userdetails/",data)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}
  return (  
    <form className='form'>
      <div class="form-group">
      <label for="Roll">User Roll</label>
      <input onChange={(e) => {setUserroll(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select user roll here" />
    </div>
    <div class="form-group">
      <label for="name">User name</label>
      <input onChange={(e) => {setUsername(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter User name here" />
    </div>
    <div class="form-group">
      <label for="UserID">User ID</label>
      <input onChange={(e) => {setUid(e.target.value)}} type="text" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter User id here" />
    </div>
    <div class="form-group">
      <label for="Password">Password</label>
      <input onChange={(e) => {setPassword(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter Password here" />
    </div>
    <div class="form-group">
      <label for="Confirm"> Confirm Password</label>
      <input onChange={(e) => {setPassword(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter password again" />
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input onChange={(e) => {setEmail(e.target.value)}} type="email" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Email here" />
    </div>
    <div class="form-group">
      <label for="Phone">Phone number</label>
      <input onChange={(e) => {setPhone_no(e.target.value)}} type="text" class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter phone number" />
    </div>
    <div class="form-group">
      <label for="City">City</label>
      <input onChange={(e) => {setCity(e.target.value)}} type="text" class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter City here" />
    </div>
    <div class="form-group">
      <label for="Gender">Gender</label>
      <input onChange={(e) => {setGender(e.target.value)}} type="text" class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter gender here" />
    </div>
    <div class="form-check">
    </div>
    <button onClick={printData} class="btn btn-primary">Save</button>
    </form>
 
  )
}

export default Createusers