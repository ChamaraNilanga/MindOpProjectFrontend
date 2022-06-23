import React, { useState } from 'react'
import "./AssignmentForm"
//name_,Introduction,ContentID,DueDate,CreateTime
function AssignmentForm() {

    const[Assignmentname, setAssignmentname] = useState('');
    const[Introduction, setIntroduction] = useState('');
    const[ContentID, setContentID] = useState('');
    const[DueDate, setDuedate] = useState('');

    const printData = async() => {
    console.log(ContentID.value)
    var axios = require('axios');
    var data = {
    assignmentnam : Assignmentname,
    duedat : DueDate,
    intro : Introduction,
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
    <div className='form'>
    
    <div class="form-group">
      <label for="Name">Assignment Name </label>
      <input onChange={(e) => {setAssignmentname(e.target.value)}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Assignment Name here" />
     
    </div>
    <div class="form-group">
      <label for="Intro">Introduction</label>
      <input onChange={(e) => {setIntroduction(e.target.value)}} type="text" class="form-control" id="Intro" aria-describedby="Intro" placeholder="Enter Introduction here" />
     
    </div>
    <div class="form-group">
      <label for="Content">ContentID</label>
      <input onChange={(e) => {setContentID(e.target.value)}} type="text" class="form-control" id="Content" aria-describedby="Contenthh" placeholder="Enter Contentid here" />
    
    </div>
    <div class="form-group">
      <label for="Date">DueDate</label>
      <input onChange={(e) => {setDuedate(e.target.value)}} type="date" class="form-control" id="Date" aria-describedby="DueDate" placeholder="Enter Due Date" />
    </div>
    <div class="form-check">
    </div>
    <button onClick={printData} type="submit" class="btn btn-primary">Submit</button>
  </div>
  )
}

export default AssignmentForm