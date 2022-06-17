import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Singlecoursedetails from "../../components/SingleCourseDetails/Singlecoursedetails";

function Singlecoursedetailspage(){
    return(
        <div>
        <header><Navbar/></header>
        <div>
            <Singlecoursedetails/>
        </div>
        </div>
    )
}

export default Singlecoursedetailspage;