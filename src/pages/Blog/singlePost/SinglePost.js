import "./singlePost.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import React,{ useState, useEffect } from "react";
import TopBar from "../topbar/TopBar";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Post() {
const location=useLocation();
const {bid} = location.state;
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const getblog=async(bid,e)=>{
          // console.log(id);
          await axios.get(`http://localhost:8052/blog/byblogid/${bid}`).then((res)=>{
                console.log(res);
            setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getblog(bid);
      },[])


  return (
 
    <div className="row m-2"> 
    <TopBar/>

<div className="post">
{blogs.map(blog => {
  return(
    <div className="postInfo">
      <div className="col-sm-2 col-md-12 v my-2" key={blog.blogid}>

      {/* <img className="postImg" 
    src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    alt=""/> */}
      <div className="card shadow-sm w-100" style={{ maxWidth: 1000, minWidth: 1000, maxHeight: "auto",  minHeight: 500 }}>

 
      <div className="card-body" >

 <div className="box">

  <Link to="/singlepost/" className="nav-link">
      <span className="postTitlePost" key={blog.blogid}>
      {blog.blogtitle}
      </span>
      </Link>
     

      <span className="postBy" key={blog.blogid}>
Written By: {blog.userid}
</span>
<br/>

      
      <Link to="/singlepost/" className="nav-link">
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