
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
//import Navbar from "../../components/Navbar/Navbar";
//import "./DispalyCategory.css";

function DisplayCategory(){

    const [categories,setCategories] = useState([]);
    
    useEffect(()=>{
        function getDisplayCategory(){
            axios.get("http://localhost:8070/categorydetails/displaycategory").then((res)=>{
                console.log(res);
            setCategories(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDisplayCategory();
    },[])
    

    return(
       
        <div className="container">
           
        <div className="row m-2">
        <a class="btn btn-primary" href="addcategory" role="button">Add category</a>
       
             {categories.map(category => {
                 return(
                    <div className="col-sm-6 col-md-4 v my-2" key={category.categoryid}>
                    <div className="card shadow-sm w-100" style={{ minHeight: 225}}>
                     
                    <div className="card-body" >
                    <h4 key={category.categoryid}>{category.categoryname}</h4>
                    
                     <p key={category.categoryid}>{category.categoryid}</p>
                     <div className="Qbank">Question bank</div>
                     <div class="card-footer bg-transparent border-success" ></div>
                     <p key={category.categoryid}><button class="btn btn-warning"  style={{backgroundColor:'##3FA781'}}>Edit</button></p>
                     <p key={category.categoryid}><button class="btn btn-warning">Delete</button></p>
                     
                    </div>
                    </div>
                    </div>
                 );
                 })}
             </div>
             </div>
    )};
             

export default DisplayCategory;
//https://getbootstrap.com/docs/4.0/components/card/

