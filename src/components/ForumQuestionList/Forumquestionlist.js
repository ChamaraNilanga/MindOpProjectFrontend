import React ,{useState} from "react";
import "./Forumquestionlist.css";
import axios from "axios";
import {Link} from "react-router-dom";

function Forumquestionlist({questions,name,mylist,user}){
    const [myquestions,setMyquestions] = useState([]);
    const deleteQuestion=async (id , e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/forums/question/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                getQuestion(user);
            })
        }
       
    }
    function getQuestion(user){
        axios.get(`http://localhost:8070/forums/mylist/${user}`)
        .then((res)=>{
            console.log(res);
            
        setMyquestions(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    
    return(
        <div className="forumsquestions">
            <h3>{name}</h3>
            <div className="dashboardadmin">
                <ul>
                {questions.map(question=>{
                    return(
                        <div>
                            
                            <li><Link to="/forum/single" state={{fid : question.fquestionid,name : question.name_, keyimage:question.image}}><p key={question.fquestionid} style={{color:'black'}}>{question.name_}</p></Link></li>
                            {mylist==true ? <i class="fa-solid fa-trash-can" style={{color:'red', marginLeft:'85%'}} onClick={()=>{deleteQuestion(question.fquestionid)}}></i> : <></>}
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