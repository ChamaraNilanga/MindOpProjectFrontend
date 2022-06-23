
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/DisplayCategory/DisplayCategory.css";

function DisplayCategory(){

    const [categories,setCategories] = useState([]);


    const Search=(word,id)=>{
        if(!word){
            getDisplayCategory(id);
        }else{
        try{
        axios.get(`http://localhost:8070/categorydetails/searchcategory/${word}`)
        .then((res)=>{
            console.log(res);
            setCategories(res.data);
        }).catch((err)=>{
            console.log(err);
        })}catch{
            alert("no question")
        }}
    }  
    
   
        function getDisplayCategory(){
            axios.get("http://localhost:8070/categorydetails/displaycategory").then((res)=>{
                console.log(res);
            setCategories(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        } useEffect(()=>{
        getDisplayCategory();
    },[])
    
    const deletecategory=async (id,e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/categorydetails/deletecategory/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                
            })
        }
       
    }

   
    return(
        <div >
            <Navbar />
            <div className="top">
          <h1>Question categories</h1>
        </div>

        <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" onChange={(event)=>{Search(event.target.value)}} class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <button className="addcategorybtn"><Link to='/AddCategory' className="addcategorylink">Add Category</Link></button> 

        <div className="container">
        
          <div className="break"></div>
          <div className="break"></div>

          

        <div className="row m-2">
        
       
             {categories.map(category => {
                 return(
                    <div className="col-sm-6 col-md-4 v my-2" key={category.categoryid}>
                    <div className="card shadow-sm w-100" style={{ minHeight: 225}}>
                     
                    <div className="card-body" >
                    <h4 key={category.categoryid}>{category.categoryname}</h4>
                    
                     <p key={category.categoryid}>{category.categoryid}</p>
                     <div className="Qbank"><Link to='/DisplayQuestion'>Question bank</Link></div>
                     <div class="card-footer bg-transparent border-success" ></div>
                    <button className="btn btn-warning" onClick={()=>updatecategory(category.catID,category.catname)} style={{backgroundColor:'##3FA781'}}><Link to='/AddCategory'>Edit</Link></button>
                    <div className="break"></div>
                   
                    <button className="btn btn-danger" onClick={()=>deletecategory(category.catID)}>Delete</button>
                     
                    </div>
                    </div>
                    </div>
                 );
                 })}
             </div>
             </div></div>
    )};
    

export default DisplayCategory;






