import React from "react";

import {Link} from "react-router-dom";

function Forumssidebar ({cid,user}) {
    return(
    <div className="dashboardadmin">
        <h4>Forums</h4>
        <div className="addfunc">
            <h6>Add New Forum</h6>
            <Link to="/forum/addforum" state={{cid:cid , user : user}}><button className="btn btn-primary">Add</button></Link>
            
        </div>
        <Link to="/forum/mylist" state={{cid:cid}}><p>SEE MY LIST</p></Link>
       
    
    </div>
    )
}

export default Forumssidebar;