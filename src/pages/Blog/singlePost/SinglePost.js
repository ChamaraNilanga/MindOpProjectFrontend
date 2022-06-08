import "./singlePost.css";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../topbar/TopBar";

export default function SinglePost() {
  const [blog,setBlogs] = useState([]);


//   useEffect(()=>{
//     function getBlogById(){
//         axios.get("/blog/bid/").then((res)=>{
//             console.log(res);
//         setBlogs(res.data);
//         }).catch((err)=>{
//             alert(err.message);
//         })
//     }
//     getBlogById();
// },[])


<TopBar/>
  
  return (
    <div className="singlePost">
     <div className="singlePostWrapper">
         <img className="singlePostImg"
         src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         alt=""/>
           <h1 className="singlePostTitle">
         Lorem Ipsum is simply dummy
     



         <div className="singlePostEdit">
         <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
         <i className="singlePostIcon fa-solid fa-trash-can"></i>
         </div>
         </h1>
         <div className="singlePostInfo">
             <span className="singlePostAuthor">Author:<b>Shenil</b></span>
             <span className="singlepostDate">1 hour ago</span>
         </div>
         <p className="singlePostDesc">
         Lorem Ipsum is simply dummy text of the printing and 
         typesetting industry. Lorem Ipsum has been the industry's 
         standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but 
         also the leap into electronic typesetting, remaining 
         essentially unchanged. It was popularised in the 1960s 
         with the release of Letraset sheets containing Lorem Ipsum 
         passages, and more recently with desktop publishing software 
         like Aldus PageMaker including versions of Lorem Ipsum.
         Lorem Ipsum is simply dummy text of the printing and 
         typesetting industry. Lorem Ipsum has been the industry's 
         standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but 
         also the leap into electronic typesetting, remaining 
         essentially unchanged. It was popularised in the 1960s 
       
         </p>
     </div>
    </div>
  )
}
