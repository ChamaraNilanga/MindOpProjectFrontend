import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Deleteusers() {

  const [Userid,setUserid] = useState([]);
  const [Reason,setReason] = useState([]);
  

    const deleteUser = (id) => {
      alert('Are you sure to delete this record!')
      axios.delete(`http://localhost:8070/userdetails/${id}`).
      then((res) => {
        console.log(res);
     }).catch((err)=>{
      console.log(err);
      })
      window.location.reload(false)
    }

  return (
    <div>
    <form className='form'>
      <div class="form-group">
      <label for="Roll">Enter user id</label>
      <input onChange={(e) => {setUserid(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User ID here" />
    </div>

    <div class="form-group">
      <label for="Roll">Reason for delete User</label>
      <input onChange={(e) => {setReason(e.target.value)}} type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Reason for delete" />
    </div>
    <button onClick={() => {deleteUser(Userid)}}>Delete</button>
    </form>



    </div>
  )
}

export default Deleteusers