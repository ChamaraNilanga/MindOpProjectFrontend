import React from 'react'
import '../../../pages/Assignment/Assignment_T/Createassignment.css'
import Navbar from '../../../components/Navbar/Navbar'
import AssignmentForm from '../../../components/Assignment/AssignmentForm'

function CreateAssignment() {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <h2>Adding a new  assignment</h2>
      <br/>
      <div>
      
      <AssignmentForm/>
      </div>
      
    </div>

  )
}

export default CreateAssignment