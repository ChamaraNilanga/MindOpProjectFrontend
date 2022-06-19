import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Forumquestionlist from "../../components/ForumQuestionList/Forumquestionlist";
import Forumssidebar from "../../components/ForumsSideBar/Forumssidebar";

function Questionlistpage(){
    const [questions,setQuestions] = useState([]);
    const location = useLocation()
    const { id , name } = location.state
    console.log(id);
    function getQuestion(id){
        axios.get(`http://localhost:8070/forums/question/${id}`)
        .then((res)=>{
            console.log(res);
        setQuestions(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
        getQuestion(id);
    },[])

    return(
        <div>
        <header><Navbar/></header>
        <div className="addcourse">
        <div className="formadd" style={{marginRight:'10px'}}>
            <Forumquestionlist questions={questions} name={name}/>
            </div>
            <div className="sidemenu"style={{marginLeft:'10px'}}>
            <Forumssidebar/>
            </div>
        </div>
        </div>
    )
}

export default Questionlistpage;