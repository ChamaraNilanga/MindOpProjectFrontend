import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Forumquestionlist from "../../components/ForumQuestionList/Forumquestionlist";
import Forumssidebar from "../../components/ForumsSideBar/Forumssidebar";

function Forummylist({user}){
    const [questions,setQuestions] = useState([]);
    // const location = useLocation()
    // const { id , name } = location.state
    // console.log(id);
    function getQuestion(user){
        axios.get(`http://localhost:8070/forums/mylist/${user}`)
        .then((res)=>{
            console.log(res);
            
        setQuestions(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
        getQuestion(user);
    },[])

    return(
        <div>
        <header><Navbar/></header>
        <div className="addcourse">
        <div className="formadd" style={{marginRight:'10px'}}>
            <Forumquestionlist questions={questions} mylist={true} user={user}/>
            </div>
            {/* <div className="sidemenu"style={{marginLeft:'10px'}}>
            <Forumssidebar cid={id} user={user}/>
            </div> */}
        </div>
        </div>
    )
}

export default Forummylist;