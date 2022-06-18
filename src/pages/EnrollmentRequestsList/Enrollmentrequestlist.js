import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Enrollreqlist from "../../components/EnrollmentRequests/Enrollmentreqlist";

function Enrollmentrequestlist({id , userid }){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Enrollreqlist id={id} userid={userid}/>
            </div>
        </div>
    )
}

export default Enrollmentrequestlist;