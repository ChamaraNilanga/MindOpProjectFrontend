import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Enrollreqlist from "../../components/EnrollmentRequests/Enrollmentreqlist";
import {useLocation} from "react-router-dom";

function Enrollmentrequestlist({ userid }){
    const location = useLocation()
    const { id } = location.state
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