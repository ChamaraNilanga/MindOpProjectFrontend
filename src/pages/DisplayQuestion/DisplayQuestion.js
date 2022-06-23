
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/DisplayQuestion/DisplayQuestion.css";


function DisplayQuestion(){

    const [subcategories,setSubCategories] = useState([]);
    const [questions,setQuestions]=useState([]);

   
  const Search=(word,id)=>{
    if(!word){
        getDisplaySQuestions(id);
    }else{
    try{
    axios.get(`http://localhost:8070/questiondetails/searchequestion/${word}`)
    .then((res)=>{
        console.log(res);
        setQuestions(res.data);
    }).catch((err)=>{
        console.log(err);
    })}catch{
        alert("no question")
    }}
}  
    
    
    
        function getDisplaySubCategories(){
            axios.get("http://localhost:8070/categorydetails/displaysubcategory").then((res)=>{
                console.log(res);
                setSubCategories(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }useEffect(()=>{
        getDisplaySubCategories();
    },[])


   
        function getDisplaySQuestions(){
            axios.get("http://localhost:8070/questiondetails/displayquestion").then((res)=>{
                console.log(res);
                setQuestions(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        } useEffect(()=>{
        getDisplaySQuestions();
    },[])
    
    const deletequestion=async (id,e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/questiondetails/deletequestion/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                
            })
        }
       
    }



    const deletesubcategory=async (id,e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/categorydetails/deletesubcategory/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                
            })
        }
       
    }

    // const updatecategory = (categoryid,categoryname) => {
    //     console.log(categoryid,categoryname);
    //     localStorage.setItem('categoryid',categoryid);
    //     localStorage.setItem('categoryname',categoryname);
       
        
    // }
    
    return(
        <div >
            <Navbar />
            <div className="top">
          <h1>Question Bank</h1>
        </div>

        <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" onChange={(event)=>{Search(event.target.value)}} class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <button className="addsubcatbtn"><Link to='/AddSubCategory' className="addsubcatlink">Add Sub Category</Link></button> 
        <div className="Accordioncontainer">
        
          
        
       
             {subcategories.map(subcategories => {
                 return(
                    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" key={subcategories.questionsubcategoryid}>
      {subcategories.subcatname}
      </button> <button className="createquestionbtn"><Link to='/SelectQuestionType' className="createquestionlink">Create Question</Link></button> 
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Q. No</th>
      <th scope="col"></th>
      <th scope="col">question Name</th>
      <th scope="col"></th>
      <th scope="col">Created date/time </th>
      <th scope="col">Q. type </th>
      <th scope="col">Points</th>
    </tr>
  </thead>
  
  {questions.map(questions=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={questions.qid}>
                            <td class="w-25">{questions.qid}</td>
                            <td class="w-25"><input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input></td>
                            <td class="w-25">{questions.questionname}</td>
                            <td class="w-50"><div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-warning" ><Link to="/UpdateQuestion" state={{qid:questions.qid,qname:questions.questionname}}>Edit</Link></button>
                                    <button type="button" class="btn btn-primary"><Link to="/PreviewQuestion" className="previewlink">Preview</Link></button>
                                    <button type="button" class="btn btn-danger" onClick={(e)=>{ deletequestion(questions.qid)}}>Delete</button>
                                    
                                    </div></td>
                            <td class="w-30">{questions.createdtime}</td>
                            <td class="w-30">{questions.type_}</td>
                            <td class="w-20">{questions.mark}</td>
                        </tr>
                    </tbody>
                    
                )
            })}

  
</table>
                
      </div><button type="button" class="subcatdeletebtn" onClick={(e)=>{ deletesubcategory(subcategories.questionsubcategoryid)}}>Delete</button>
    </div>
  </div> <div className="break"></div>
 
</div>
                 );
                 })}
             
             </div>
             
             
             </div>
    )};
    

export default DisplayQuestion;





{/* <Link to="/AddQuestion"><button className="btn btn-warning" onClick={()=>setID(course.modid,course.modname,course.modcode,course.sdate,course.enddate,course.descrip,course.price)}>Update</button></Link>  */}

{/* <button className="btn btn-danger" onClick={()=>deletemodule(course.modid)}>Delete</button> */}