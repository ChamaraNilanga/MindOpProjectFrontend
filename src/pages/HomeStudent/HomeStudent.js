import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Allcourses from "../../components/Allcourses/Allcourses";
import EnrollConductcourses from "../../components/EnrollOrConductcourses/EnOrConcourses";
import "./HomeStudent.css";

function HomeStudent(){
    return(
        <div>
            <header><Navbar/></header>
            <div className="div1"><EnrollConductcourses id={"194075X"} role={'s'}/></div>
            <div className="div2"><Allcourses/></div>
            
        </div>
        
    )
}

export default HomeStudent;