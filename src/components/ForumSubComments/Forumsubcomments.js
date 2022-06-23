import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Forumsubcomments.css";

function Forumsubcomments({fid}){
    const [subreplies , setSubreplies]=useState([]);
    function getAllsubcomments(id){
        axios.get(`http://localhost:8070/forums/subcomment/${id}`)
        .then((res)=>{
            console.log(res);
        setSubreplies(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
        getAllsubcomments(fid);
    },[])
    return(
        <div className="subcommentslist">
        {subreplies.map(subreply=>{
            return(
            <div className="contentsubcomment">
                <hr/>
                <p key={subreply.fsubcommentid}>{subreply.body}</p>
                <br/>
                <p>{subreply.username}</p>
                <text>{subreply.postedtime}</text>
            </div>)
         })} 
         </div>
    )
}

export default Forumsubcomments;