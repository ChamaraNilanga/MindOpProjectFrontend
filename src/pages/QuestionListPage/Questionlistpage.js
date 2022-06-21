import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Forumquestionlist from "../../components/ForumQuestionList/Forumquestionlist";
import Forumssidebar from "../../components/ForumsSideBar/Forumssidebar";

function Questionlistpage({user}){
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

    return(
        <div>
        <header><Navbar/></header>
        <div className="addcourse">
        <div className="formadd" style={{marginRight:'10px'}}>
            <Forumquestionlist questions={questions} name={name}/>
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