import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AllcoursesDelUpdlist from "../../components/AllcoursesDeleteUpdateList/Allcoursesdelupdlist";
import "./Courseupddellist.css";

function Courseupdatedeletelist(){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <AllcoursesDelUpdlist/>
            </div>
        </div>
    )
}

export default Courseupdatedeletelist;