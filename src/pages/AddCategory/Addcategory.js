import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Addforumcategory from "../../components/AddForumCategory/Addforumcategory";

function Addcategory(){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Addforumcategory/>
            </div>
        </div>
    )
}
export default Addcategory;