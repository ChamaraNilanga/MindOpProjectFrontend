import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Addforumquestion from "../../components/AddForumQuestion/Addforumquestion";

function Addforumquestionpage(){
    return(
        <div>
            <header><Navbar/></header>
            <div>
                <Addforumquestion/>
            </div>
        </div>
    )
}

export default Addforumquestionpage;