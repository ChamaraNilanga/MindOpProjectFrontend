import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddCourseForm from "../../components/AddCourseForm/Addcourseform";
import "./Addcourse.css";

function Addcourse(){
    return(
        <div>
            <header><Navbar/></header>
            <div className="addcourse"><AddCourseForm/></div>
        </div>
        
    )
}

export default Addcourse;