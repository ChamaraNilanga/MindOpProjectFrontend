import React from "react";
import "./Admindash.css";
import {Link} from "react-router-dom";

function AdminDash () {
    return(
    <div className="dashboardadmin">
        <h4>Courses</h4>
        <div className="addfunc">
            <h6>Add New Course</h6>
            <Link to="/course/addcourse"><button className="btn btn-primary">Add</button></Link>
            
        </div>
        <Link to="/course/list"><p>SEE LIST</p></Link>
       
       <h4>Users</h4>
        <div className="addfuncstu">
            <h6>Add New User</h6>
            <button className="btn btn-primary">Add</button>
            
        </div>
        <Link to="/studentlist"><p>SEE LIST</p></Link>
        
    </div>
    )
}

export default AdminDash;