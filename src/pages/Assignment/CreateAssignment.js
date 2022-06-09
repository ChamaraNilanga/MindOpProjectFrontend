import React from 'react'
import "../Assignment/Createassignment.css"
import Navbar from '../../components/Navbar/Navbar'
import AssignmentForm from '../../components/Navbar/AssignmentForm'

function CreateAssignment() {
  return (
    <div>
      <Navbar/>
      <br/>
      <h2>Create Assignment Here </h2>
      <AssignmentForm/>
    </div>

  )
}

export default CreateAssignment