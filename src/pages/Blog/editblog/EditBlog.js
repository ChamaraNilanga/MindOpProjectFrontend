import "./editblog.css"
import TopBar from "../topbar/TopBar";
import axios from "axios";
import React,{ useState, useEffect } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';


export default function Write() {
    const location=useLocation();
const {bid} = location.state;
const {btitle}=location.state;
const {bbody}=location.state
  const [blogs, setBlogs] = useState('')
  const [title, setTitle] = useState('')
  const [blogbody, setBlogbody] = useState('')    



      
        const getEditBlogs=async(bid,e)=>{

           await axios.get(`http://localhost:8052/blog/byblogid/${bid}`).then((res)=>{
                console.log(bid,btitle,bbody);
                setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
    useEffect(()=>{
        getEditBlogs(bid,btitle,bbody);
    },[])


    const updateblog =async (bid,e) => {
        await axios.put(`http://localhost:8052/blog/updateblog/${bid}`,
             // params: {
             //   uid: {id},
             // },
           // },
     {
          
           })
           .then(() => {
             console.log(title)
             console.log(blogbody)
             console.log('Success')
             
             alert('updated successed!')
           }
           )
           
       }

       const addblog =async () => {
        await axios.post(`http://localhost:8052/blog/addblog/${bid}`,
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
 
<div className="writeForm">
    <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i className="writeIcon1 fa-solid fa-plus"></i>
        </label>

       <input type="file" id="fileInput" /> 


        <textarea  placeholder="  Title" className="writeInput1">
            {btitle}
            </textarea>
    </div>
    <div className="writeFormGroup">
        <textarea placeholder="Tell your story..."  className="writeInput writeText">
            {bbody}
        </textarea>
        
    </div>
    
    <button type="submit" className="writeSubmits" onClick={updateblog}>Update</button>
    <button type="update" className="writeSubmit" onClick={addblog}>Publish</button>
   
  
</div>
</div>
   
  )
}
