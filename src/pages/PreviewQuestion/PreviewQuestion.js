import axios from "axios";
import React,{ useState, useEffect } from "react";
//import './SearchBar.css';


 function PreviewQuestion(){
    useEffect(()=>{
        function getDisplaySQuestions(){
            axios.get("http://localhost:8070/questiondetails/displayquestion").then((res)=>{
                console.log(res);
                setQuestions(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDisplaySQuestions();
    },[])
    
    const [questions,setQuestions]=useState([]);
    
    
    return(
        
        <a tabindex="0" class="btn btn-lg btn-danger" role="button" 
        data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover"
         data-bs-content="And here's some amazing content. It's very engaging. Right?">

            Dismissible popover
            
            </a>
        
    )
 }

 export default PreviewQuestion;