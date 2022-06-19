import React , {useEffect,useState} from "react";
import axios from "axios";
import "./Singleforumquestion.css";

import {Link} from "react-router-dom";

function Singleforumquestion({replies,fid ,name}){

    return(
        <div className="singleforum">
            <h3>{name}</h3>
           {replies.map(reply=>{
                
                return(
                    <div className="singleforumdisplay">
                        <text key={reply.fcommentid} >{reply.body}</text>
                        <br/>
                        <p>{reply.username}</p>
                        <p>{reply.postedtime}</p>
                        <Link to="/forum/subreply" state={{ cid : reply.fcommentid , name : name , commentbody : reply.body}}><text className="textbold">Reply</text></Link>

                    </div>
                )
            })}
            <Link to="/forum/reply" state={{ fid : fid, name : name}}><text className="textbold" style={{color:'yellow'}}>Reply</text></Link>
        </div>
        
    )
}

export default Singleforumquestion;