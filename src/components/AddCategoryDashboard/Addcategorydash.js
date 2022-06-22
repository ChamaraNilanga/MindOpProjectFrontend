import React from "react";

import {Link} from "react-router-dom";

function Addcategorydash () {
    return(
    <div className="dashboardadmin">
        <h4>Categories</h4>
        <div className="addfunc">
            <h6>Add New Category</h6>
            <Link to="/forums/addcategory"><button className="btn btn-primary">Add</button></Link>
            
        </div>
        
        
    </div>
    )
}

export default Addcategorydash;