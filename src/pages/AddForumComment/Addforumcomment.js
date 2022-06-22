import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Addforumcomment from "../../components/AddForumComments/Addforumcomments";

function Addforumcomments({user}){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Addforumcomment user={user}/>
            </div>
        </div>
    )
}

export default Addforumcomments;