import React from "react";
import "./Allcourses.css";
import Subjectcard from "../SubjectCard/Subjectcard";

function Allcourses(){
    return(
        <div className="Container">
            <div className="head">
                <h3 className="head3">All Courses</h3>
                <i class="fa-solid fa-circle-right fa-xl"></i>
            </div>
            
            <Subjectcard/>
        </div>
    )
}

export default Allcourses;