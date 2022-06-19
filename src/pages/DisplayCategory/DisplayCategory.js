
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/DisplayCategory/DisplayCategory.css";

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
    
    const deletecategory=async (id , e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/coursedetails/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                
            })
        }
       
    }

    const updatecategory = (id,name,) => {
        console.log(id);
        localStorage.setItem('catID',id);
        localStorage.setItem('catname',name);
       
        
    }
    
    return(
        <div >
            <Navbar />
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
                     <div className="Qbank">Question bank</div>
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
//https://getbootstrap.com/docs/4.0/components/card/




