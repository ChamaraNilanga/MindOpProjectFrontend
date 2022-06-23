import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Navbar from '../../../components/Navbar/Navbar';
import '../Assignment_T/AssignmentDetails.css'
import { Link } from 'react-router-dom';

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

 const deleteAssignment = (id) => {
  alert('Are you sure to delete this record!')
  axios.delete(`http://localhost:8070/assignmentdetails/${id}`).
  then((res) => {
    setAssignment(res.data);
    console.log(res);
 }).catch((err)=>{
  console.log(err);
  })
  window.location.reload(false)
}

  return (
    <div>
      <Navbar/>
      <br/>
      
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Assignment Name</th>
      <th scope="col">Due Date</th>
      <th scope="col">Time Limit</th>
      <th scope="col">Details</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {Assignment.map(Assign =>{return(
      <tr>
      {/* <td>{Assign.assignmentid}</td> */}
      <td>{Assign.name_}</td>
      <td>{Assign.duedate}</td>
      <td>{Assign.timelimit}</td>
      <td>{Assign.introduction}</td>
      <Link to="/updateassignment" state={{id:Assign.assignmentid,name:Assign.name_,due:Assign.duedate,tlimit:Assign.timelimit,intro:Assign.introduction}}>
      <td><button>Update</button></td>
      </Link>
      <td><button onClick={() => {deleteAssignment(Assign.assignmentid)}}>Delete</button></td>

    </tr>
    )})}

  </tbody>
</table>
    </div>
  )
}

export default AssignmentDetails