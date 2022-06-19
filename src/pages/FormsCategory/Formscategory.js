import React,{useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import Categorylistforum from "../../components/CategoryListForum/Categorylistforum";
import "./Formscategory.css";

function Forumcategory(){
    const [categories,setCategories] = useState([]);
  
    function getCategories(){
        axios.get(`http://localhost:8070/forums/category/`)
        .then((res)=>{
            console.log(res);
        setCategories(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
        getCategories();
    },[])
    return(
        <div>
            <header><Navbar/></header>
            <div className="Forums">
                <h3>Select category related to your problem</h3>
                <Categorylistforum categories={categories}/>
            </div>
        </div>
    )
}

export default Forumcategory;