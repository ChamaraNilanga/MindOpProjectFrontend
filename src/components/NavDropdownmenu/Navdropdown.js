import React, { useState }  from "react";
import { Dropdownitems } from "./Dropdownitems";
import { Link } from "react-router-dom";
import "./NavDropdown.css";

function Dropdown(){
    const [dropdown , setDropdown] = useState(false);
    return(
        <div className="Dropdown-menu">
        <ul className={dropdown ? "sub-menu-clicked" : "sub-menu"} onClick={()=>setDropdown(!dropdown)}>
        {Dropdownitems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link to={item.url} className={item.cName} onClick={()=>setDropdown(false)}>{item.title}</Link>
                        </li>
                    )}
                 )}

        </ul>
        </div>
    );
}

export default Dropdown;