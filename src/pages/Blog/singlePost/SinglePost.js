import "./singlePost.css";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../topbar/TopBar";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  let {postId} =useParams();
  const [blog,setBlogs] = useState([]);
  


  useEffect(()=>{
    function getBlogById(){
        axios.get(`http://localhost:8052/blog/byblogid/2`).then((res)=>{
            console.log(res);
        setBlogs(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
    }
    getBlogById();
},[])


  return (
    <div className="singlePost">
      <TopBar/>
     <div className="singlePostWrapper">
         <img className="singlePostImg"
         src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         alt=""/>
           <h1 className="singlePostTitle">
           {
            function getBlogById(){
        axios.get(`http://localhost:8052/blog/getblogbody/2`).then((res)=>{
            console.log(res);
        setBlogs(res.data);
        }).catch((err)=>{
            alert(err.message);
        })
      }
    }
         
         </h1>
         
         <div className="singlePostEdit">
         <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
         <i className="singlePostIcon fa-solid fa-trash-can"></i>
         </div>
        
         <div className="singlePostInfo">
             <span className="singlePostAuthor">Author:<b>Shenil</b></span>
             <span className="singlepostDate">1 hour ago</span>
         </div>
         <p className="singlePostDesc">
           
    
       
         </p>
     </div>
    </div>
  )
}
