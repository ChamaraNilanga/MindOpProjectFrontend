import "./post.css";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import React,{ useState, useEffect } from "react";
import TopBar from "../topbar/TopBar";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Post() {

    const [blogs,setBlogs] = useState([]);

    
    
        function getAllBlogs(){
            axios.get(`http://localhost:8052/blog/`).then((res)=>{
                console.log(res);
            setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        useEffect(()=>{
        getAllBlogs();
    },[])
    

  //   const searchblog=async (id , e)=>{
      
  //         await axios.get(`http://localhost:8052/blog/${id}`)
  //         .then((res)=>{
  //             console.log(res.data);
  //             alert(res.data);
  //             getAllBlogs();
  //         })
      
     
  // }



  return (
 
    <div className="row m-2"> 
    <TopBar/>

<div className="post">
{blogs.map(blog => {
  return(
    <div className="postInfos">
      <div className="col-sm-2 col-md-12 v my-2" key={blog.blogid}>

      {/* <img className="postImg" 
    src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    alt=""/> */}
      <div className="cards shadow-sm w-100" style={{ maxWidth: 250, minWidth: 250, maxHeight: 260,  minHeight: 260 }}>

 
      <div className="card-body" style={{ maxWidth: 350}}>

 <div className="box">

  <Link to="/singlepost/" className="nav-link" state={{bid:blog.blogid}}>
      <span className="postTitles" key={blog.blogid}>
      {blog.blogtitle}
      </span>
      </Link>
     

      <span className="postBy" key={blog.blogid}>
Written By: {blog.userid}
</span>
<br/>

      
      <Link to="/singlepost/" className="nav-link" state={{bid:blog.blogid}}>
      <p className="postDesc" key={blog.blogid}> 
      {blog.body}
      </p>
      
       </Link>
{/* 
       <span className="postDate" key={blog.blogid}>
{blog.managetime} 
</span> */}

      
      </div>
      </div>
      </div>
      </div>
      </div>
                     

  )

                    
})}

</div>
</div>

  )
}