import "./myblog.css"
import "../post/Post";
import { Link } from 'react-router-dom';
import Post from "../post/Post";
import axios from "axios";
import React,{ useState, useEffect } from "react";
import TopBar from "../topbar/TopBar";
import "../post/post.css"



export default function MyBlog() {

    const [blogs,setBlogs] = useState([]);
    
    
        function getAllBlogs(){
            axios.get(`http://localhost:8052/blog/user/1941`).then((res)=>{
                console.log(res);
            setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
    useEffect(()=>{
        getAllBlogs();
    },[])


    const deleteblog=async (id , e)=>{
      console.log(id);
      if(window.confirm('Are you sure you want to delete?')){
          await axios.delete(`http://localhost:8052/blog/${id}`)
          .then((res)=>{
              console.log(res.data);
              alert(res.data);
              getAllBlogs();
          })
      }
     
  }


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
<div className="cards shadow-sm w-100" style={{maxWidth: 250, minWidth: 250, maxHeight: 250,  minHeight: 250 }}>


<div className="card-body" style={{ maxWidth: 350, }}>
<div className="box" style={{ marginTop: -15, }}>


<Link to="/editblog/" className="nav-link" state={{bid:blog.blogid,btitle:blog.blogtitle,bbody:blog.body}}>
<button className="edit">
<i className="singlePostIcon fa-solid fa-pen-to-square" style= {{color: "teal"}}></i>
</button>
  <button onClick={()=>deleteblog(blog.blogid)}>
  <i className="singlePostIcon fa-solid fa-trash-can" style= {{color: "tomato"}}>
</i>
</button>
</Link>



<span className="postTitles" key={blog.blogid}>
{blog.blogtitle}
</span>
<br/>

<span className="postBy" key={blog.blogid}>
Written By: {blog.userid}
</span>
<br/>



<p className="postDesc" key={blog.blogid}>
{blog.body}
</p>

{/* <span className="postDate" key={blog.blogid}>
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
        