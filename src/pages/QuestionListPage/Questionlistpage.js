import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Forumquestionlist from "../../components/ForumQuestionList/Forumquestionlist";
import Forumssidebar from "../../components/ForumsSideBar/Forumssidebar";
import "./pin.css";

function Questionlistpage({user,role}){
    const [questions,setQuestions] = useState([]);
    const [word,setWord] = useState([]);
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
    const Search=(word,id)=>{
        if(!word){
            getQuestion(id);
        }else{
        try{
        axios.get(`http://localhost:8070/forums/search/${word}&${id}`)
        .then((res)=>{
            console.log(res);
        setQuestions(res.data);
        }).catch((err)=>{
            console.log(err);
        })}catch{
            alert("no question")
        }}
    }
    const pinnedQuestion=(id)=>{
        axios.get(`http://localhost:8070/forums/pinquestion/${id}`)
        .then((res)=>{
            console.log(res);
        setQuestions(res.data);
        })
    }

    return(
        <div>
        <header><Navbar/></header>
        <div className="addcourse">
        <div className="formadd" style={{marginRight:'10px'}}>
            <div className="pinornon">
           <p style={{marginLeft:'20px',color:'black',paddingRight:'20px'}}>See pinned questions<i class="fa-solid fa-tags" style={{color:'#d9a20b',marginLeft:'10px'}} onClick={()=>{pinnedQuestion(id)}}></i></p>
           <p style={{marginLeft:'20px',color:'black',paddingRight:'20px'}}>See all questions<i class="fa-solid fa-location-pin" style={{color:'#d9a20b',marginLeft:'10px'}} onClick={()=>{getQuestion(id)}}></i></p>
           </div>
            <Forumquestionlist questions={questions} name={name} role={role} />
            </div>
            <div className="sidemenu"style={{marginLeft:'10px'}}>
            <div className="input-group">
                <div className="form-outline" >
                    <input id="search-input" style={{width:'210px'}} type="search" onChange={(event)=>{Search(event.target.value,id)}} class="form-control" placeholder="Search"/>
                    
                    </div>
                    <button id="search-button" type="button" class="btn btn-warning">
                    <i className="fas fa-search"></i>
                    </button>
                </div>
            <Forumssidebar cid={id} user={user}/>
            </div>
        </div>
        </div>
    )
}

export default Questionlistpage;