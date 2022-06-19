import React from "react";

import {Link} from "react-router-dom";

function Forumssidebar () {
    return(
    <div className="dashboardadmin">
        <h4>Forums</h4>
        <div className="addfunc">
            <h6>Add New Forum</h6>
            <Link to="/forum/addforum"><button className="btn btn-primary">Add</button></Link>
            
        </div>
        <Link to="/forum/mylist"><p>SEE MY LIST</p></Link>
       
    
    </div>
    )
}

export default Forumssidebar;