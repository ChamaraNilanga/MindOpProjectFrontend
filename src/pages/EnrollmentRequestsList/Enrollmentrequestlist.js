import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Enrollreqlist from "../../components/EnrollmentRequests/Enrollmentreqlist";

function Enrollmentrequestlist({id}){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Enrollreqlist id={id}/>
            </div>
        </div>
    )
}

export default Enrollmentrequestlist;