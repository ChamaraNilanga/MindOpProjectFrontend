import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UpdateCourse from "../../components/UpdateModule/Updatemodule";
import AdminDash from "../../components/AdminDashboard/Admindash";


function Addcourse(){
    return(
        <div>
            <header><Navbar/></header>
            <div className="addcourse">
                <div className="formadd">
                    <UpdateCourse/>
                </div>
                <div className="sidemenu">
                    <AdminDash/>
                </div>
            </div>
        </div>
        
    )
}

export default Addcourse;