import React from "react";
import "./Forumquestionlist.css";

function Forumquestionlist({questions,name}){
    return(
        <div className="forumsquestions">
            <h3>{name}</h3>
            <div className="dashboardadmin">
                <ul>
                {questions.map(question=>{
                    return(
                        <div>
                            <li><p key={question.fquestionid}>{question.name_}</p></li>
                            <text className="text">Reply</text>
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