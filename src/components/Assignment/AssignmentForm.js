import React, { useState } from 'react'
import "../Assignment/AssignmentForm.css"
import Upload from '../upload/Upload';

function AssignmentForm() {

    const[Assignmentname, setAssignmentname] = useState('');
    const[Introduction, setIntroduction] = useState('');
    const[ContentID, setContentID] = useState('');
    const[DueDate, setDuedate] = useState('');
    const[TimeLimit, setTimeLimit] = useState('');

    const printData = async() => {
    console.log(ContentID.value)
    var axios = require('axios');
    var data = {
    assignmentnam : Assignmentname,
    duedat : DueDate,
    intro : Introduction,
    timelimit : TimeLimit,
    contid : ContentID
    }
    await axios.post('http://localhost:8070/assignmentdetails/',data)
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}
  return (
   
    
    <form className='form'>
    <div class="form-group">
      {/* <label for="Name">Assignment Name </label><br/>
      <input onChange={(e) => {setAssignmentname(e.target.value)}} type="text" required  giuclass="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Assignment Name here" /> */}
     
      <div class="form-group">
      <label for="Intro">Assignment Name</label>
      <input onChange={(e) => {setAssignmentname(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Assignment Name here" />
    </div>

    </div>
    <div class="form-group">
      <label for="Intro">Description</label>
      <input onChange={(e) => {setIntroduction(e.target.value)}} type="text" required class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter Description here" />
    </div>
    <div class="form-group">
      <label for="TimeLimit">Time Limit</label>
      <input onChange={(e) => {setTimeLimit(e.target.value)}} type="text" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Time limit in minutes" />
    </div>

    <div class="form-group">
      <label for="Content">ContentID</label>
      <input onChange={(e) => {setContentID(e.target.value)}} type="text" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Contentid here" />
    </div>
    <div class="form-group">
      <label for="Date">DueDate</label>
      <input onChange={(e) => {setDuedate(e.target.value)}} type="date" class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter Due Date" />
    </div>
    <div class="form-group">
      <label for="upload">Additional Files</label>
      <Upload/>
    </div>


    <div class="form-check">
    </div>
    <button onClick={printData} type="submit" class="btn btn-primary">Save</button>
    </form>
 
  )
}

export default AssignmentForm