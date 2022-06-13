import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Navbar from '../../../components/Navbar/Navbar';




function AssignmentDetails() 
{
  const [Assignment,setAssignment] = useState([]);

  useEffect(()=>{
    getAllAssignments()
  console.log("asd");
},[])

function getAllAssignments(){
  axios.get(`http://localhost:8070/assignmentdetails/`).
  then((res)=>{
   setAssignment(res.data);
   console.log(res);
}).catch((err)=>{
 console.log(err);
 })
 }
  return (
    <div>
      <Navbar/>
      <br/>
      
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Assignment NO</th>
      <th scope="col">Assignment Name</th>
      <th scope="col">Due Date</th>
      <th scope="col">Time Limit</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    {Assignment.map(Assign =>{return(
      <tr>
      <td>{Assign.assignmentid}</td>
      <td>{Assign.name_}</td>
      <td>{Assign.duedate}</td>
      <td>{Assign.timelimit}</td>
      <td>{Assign.introduction}</td>
    </tr>
    )})}

  </tbody>
</table>
    </div>
  )
}

export default AssignmentDetails