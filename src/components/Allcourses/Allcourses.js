import React from "react";
import "./Allcourses.css";
import Subjectcard from "../SubjectCard/Subjectcard";

function Allcourses(){
    return(
        <div className="Container">
            <h3 className="head3">All Courses</h3>
            <Subjectcard/>
        </div>
    )
}

export default Allcourses;