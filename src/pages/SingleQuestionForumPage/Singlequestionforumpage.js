import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Singleforumquestion from "../../components/SingleForumQuestion/Singleforumquestion";
import { useLocation } from "react-router-dom";
import Forumssidebar from "../../components/ForumsSideBar/Forumssidebar";
import "./Singlequestionforumpage.css";
import {Link} from "react-router-dom";


function Singlequestionforumpage({user}){
    const [comments,setComments] = useState([]);
    const location = useLocation();
    const { fid , name } = location.state;
    console.log(location.state);
    function getAllcomments(id){
        axios.get(`http://localhost:8070/forums/comment/${id}`)
        .then((res)=>{
            console.log(res);
        setComments(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
        getAllcomments(fid);
    },[])

    return(
        <div>
        <header><Navbar/></header>
        <div className="forumhomesingle">
            
            <div className="formadd" style={{marginRight:'10px'}}>
                
            <Singleforumquestion replies={comments} fid={fid} name={name}/>
            </div>
            <div className="sidemenu">
                <Forumssidebar cid={fid} user={user}/>
            </div>
            
        </div>
        </div>
    )
}

export default Singlequestionforumpage;