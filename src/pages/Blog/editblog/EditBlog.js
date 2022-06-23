import "./editblog.css"
import TopBar from "../topbar/TopBar";
import axios from "axios";
import React,{ useState, useEffect } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import Navbar from "../../../components/Navbar/Navbar"

export default function Edit() {
    const location=useLocation();
const {bid} = location.state;
const {btitle}=location.state;
const {bbody}=location.state
  const [blogs, setBlogs] = useState('')
  const [blogtitle, setBlogitle] = useState('')
  const [body, setBody] = useState('')    



      
        const getEditBlogs=async(bid,e)=>{

           await axios.get(`http://localhost:8070/blog/byblogid/${bid}`).then((res)=>{
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
        console.log(bid)
        await axios.put(`http://localhost:8070/blog/updateblog/${bid}`,
     {
        btitle:blogtitle,
        bbody:body
           
           })
           .then(() => {
             console.log(blogtitle)
             console.log(body)
             console.log('Success')
           }
           )
           
       }

       useEffect(()=>{
        setBody(localStorage.getItem('body'));
        setBlogitle(localStorage.getItem('blogtitle'));
      },[])





  return (
    <div>
    <Navbar/>
    <div className="editpostswrite">
    <div>
        <TopBar/>
        </div>
    <div className="write">
   
 
<div className="writeForm">
    <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i className="writeIcon1 fa-solid fa-plus"></i>
        </label>

       <input type="file" id="fileInput" /> 


        <textarea  placeholder="  Title" 
         onChange={(event) => {
            setBlogitle(event.target.value)
          }}
        className="writeInput1">
            {btitle}
            </textarea>
    </div>
    <div className="writeFormGroup">
        <textarea placeholder="Tell your story..." 
         onChange={(event) => {
            setBody(event.target.value)
          }}
        className="writeInput writeText">
            {bbody}
        </textarea>
        
    </div>
    
    <Link to="/Blogs/" className="nav-link"> 
    <button type="submit" className="writeUpdate" onClick={updateblog(bid)} >Update</button>
    </Link>
    {/* <button type="update" className="writeSubmit" onClick={addblog}>Publish</button> */}
   
  
</div>
</div>
</div>
   </div>
  )
}
