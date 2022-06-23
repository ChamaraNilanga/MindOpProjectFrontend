import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function Deleteusers() {

  const [Userid,setUserid] = useState([]);
  const [Reason,setReason] = useState([]);
  

    const deleteUser = (id) => {
      console.log(id)
      alert('Are you sure to delete this record!')

      axios.delete(`http://localhost:8070/userdetails/${id}`).
      then((res) => {
        console.log(res);
        let vlid=res.data
        if (vlid=='No any user') {
          alert('No any user')
       }else{
        alert('User deleted')
       }
     }).catch((err)=>{
      console.log(err);
      })
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
    <br/>
    <p>
    <button >Go to back</button>
    </p>
    </form>



    </div>
  )
}

export default Deleteusers