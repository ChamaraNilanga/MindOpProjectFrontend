import React , {useEffect,useState} from "react";
import axios from "axios";
import "./Singleforumquestion.css";
import Forumsubcomments from "../ForumSubComments/Forumsubcomments";
import {Link} from "react-router-dom";

function Singleforumquestion({replies,subreplies, fid ,name , keyimage}){
    console.log(keyimage);
    const getimage=(key)=>{
        axios.get(`http://localhost:8070/forums/image/${key}`)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    

    return(
        <div className="singleforum">
            <h3>{name}</h3>
            {!keyimage ? <></>: <img src={'http://localhost:8070/images/' + keyimage} className="imagedisplay"></img>}
            
           {replies.map(reply=>{
                
                return(
                    <div className="singleforumdisplay">
                        <p key={reply.fcommentid} >{reply.body}</p>
                        <br/>
                        <p>{reply.username}</p>
                        <p>{reply.postedtime}</p>
                        <Link to="/forum/subreply" state={{ cid : reply.fcommentid , name : name , commentbody : reply.body ,fid:fid,keyimage:keyimage}}><text className="textbold">Reply</text></Link>
                            <Forumsubcomments fid={reply.fcommentid}/>
                    </div>
                )
            })}
            <Link to="/forum/reply" state={{ fid : fid, name : name,keyimage:keyimage}}><text className="textbold" style={{color:'yellow'}}>Reply</text></Link>
        </div>
        
    )

}

export default Singleforumquestion;