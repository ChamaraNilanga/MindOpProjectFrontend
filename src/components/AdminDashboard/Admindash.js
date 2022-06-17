import React from "react";
import "./Admindash.css";

function AdminDash () {
    return(
    <div className="dashboardadmin">
        <h4>Courses</h4>
        <div className="addfunc">
            <h6>Add New Course</h6>
            <button className="btn btn-primary">Add</button>
            
        </div>
       <a href="/courselist">SEE LIST</a>
       <h4>Students</h4>
        <div className="addfuncstu">
            <h6>Add New Student</h6>
            <button className="btn btn-primary">Add</button>
            
        </div>
        <a href="/studentlist">SEE LIST</a>
    </div>
    )
}

export default AdminDash;