import React from "react";
import "./Forumquestionlist.css";
import {Link} from "react-router-dom";

function Forumquestionlist({questions,name}){
    return(
        <div className="forumsquestions">
            <h3>{name}</h3>
            <div className="dashboardadmin">
                <ul>
                {questions.map(question=>{
                    return(
                        <div>
                            
                            <li><Link to="/forum/single" state={{fid : question.fquestionid,name : question.name_}}><p key={question.fquestionid} style={{color:'black'}}>{question.name_}</p></Link></li>
                            <Link to="/forum/reply" state={{ fid : question.fquestionid, name : question.name_}}><text className="textbold">Reply</text></Link>
                            <hr/>
                        </div>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Forumquestionlist;