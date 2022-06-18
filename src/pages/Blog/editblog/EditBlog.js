import "./editblog.css"
import TopBar from "../topbar/TopBar";
import axios from "axios";
import React,{ useState, useEffect } from "react";

function Edit() {


    const [blogs,setBlogs] = useState([]);

    
    useEffect(()=>{
        function getblogbody(){
            axios.get(`http://localhost:8052/blog/getblogbody/27`).then((res)=>{
                console.log(res);
            setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getblogbody();
    },[])


  
  const [title, setTitle] = useState('')
  const [blogbody, setBlogbody] = useState('')
console.log(title)
console.log(blogbody)

  const addblog =async () => {
   await axios.post('http://localhost:8052/blog/addblog/1941',
        // params: {
        //   uid: {id},
        // },
      // },
{
        blogtitle:title,
        body:blogbody,
      })
      .then(() => {
        console.log(title)
console.log(blogbody)
        console.log('Success')
        
        alert('added successed!')
      }
      )
      
  }

  return (
      
    <div className="write">
        <TopBar/>
      <img 
      className="writeImg"
      src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      alt=""/>
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>


            <input type="file" id="fileInput"/>
            <input type="text" 
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            placeholder="Title" 
            className="writeInput" 
           />
        </div>
        {blogs.map(blog => {
        <div className="writeFormGroup" key={blog.blogid}>
            <textarea placeholder="Tell your story..." 
            type="text"
            onChange={(event) => {
              setBlogbody(event.target.value)
            }}
            className="writeInput writeText">
                {blog.body}
            </textarea>
            
        </div>
        })}
        <div className="writeSubmit">
        <button type="submit" onClick={addblog} className="btn btn-primary"
        >Publish</button>
       
        </div>
    </form>
    </div>
  )

  
}

export default  Edit;