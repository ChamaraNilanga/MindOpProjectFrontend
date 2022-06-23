
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../components/QuizActivityStartStudent/QuizActivityStartStudent.css";
import QuizImage from "../../images/quiz.jpg";

function QuizActivityStartStudent(){

    const [quizes,setQuizes] = useState([]);


    const searchquiz=(word,id)=>{
        if(!word){
          getDisplayQuiz(id);
        }else{
        try{
        axios.get(`http://localhost:8070/quizdetails/searchquizactivity/${word}`)
        .then((res)=>{
            console.log(res);
            setQuizes(res.data);
        }).catch((err)=>{
            console.log(err);
        })}catch{
            alert("No any Quiz Activity relevant to that Name")
        }}
    }  
    
   
        function getDisplayQuiz(){
            axios.get("http://localhost:8070/quizdetails/displayquizactivity").then((res)=>{
                console.log(res);
                setQuizes(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        } useEffect(()=>{
            getDisplayQuiz();
    },[])
    
   

   
    return(
        <div >
        
      
      <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" onChange={(event)=>{searchquiz(event.target.value)}} class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fa fa-search"></i>
        </button>
      </div>

        <div className="quizcontainer">
        
          <div className="break"></div>
          <div className="break"></div>

          

        <div className="row m-2">
        
       
             {quizes.map(quiz => {
                 return(

                    <div class="cardcontainer">
                  
                    <img class="card-img-top " src={QuizImage} alt="Card image cap"/>
                    <div class="card-body">
                        <h6 class="crdtitle"    key={quiz.quizid}>{quiz.quizname}</h6>
                        <p class="crdtxt" key={quiz.quizid}>{quiz.description_}</p>
                        <button className="attemptquizbtn" ><Link to="/DisplayQuiz" >Attempt Quiz</Link></button>
                    </div>
                    </div>


                    
            
                 );
                 })}
             </div>
             </div>
             <button className="bactocrc"><Link to="CourseContent">Back to course</Link></button> </div>
    )};
    

export default QuizActivityStartStudent;



