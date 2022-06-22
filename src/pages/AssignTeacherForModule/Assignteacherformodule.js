import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Assignteacher from "../../components/AssignTeacherForm/Assignteacherform";

function Assignteacherformodule({user}){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Assignteacher user={user}/>
            </div>
        </div>
    )
}

export default Assignteacherformodule;