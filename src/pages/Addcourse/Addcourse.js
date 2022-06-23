import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddCourseForm from "../../components/AddCourseForm/Addcourseform";
import AdminDash from "../../components/AdminDashboard/Admindash";
import "./Addcourse.css";

function Addcourse(){
    return(
        <div>
            <header><Navbar/></header>
            <div className="addcourse">
                <div className="formadd">
                    <AddCourseForm/>
                </div>
                <div className="sidemenu">
                    <AdminDash/>
                </div>
            </div>
        </div>
        
    )
}

export default Addcourse;