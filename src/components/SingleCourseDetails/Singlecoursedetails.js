import React , {useEffect,useState} from "react";
import axios from "axios";
import "./Singlecoursedetails.css";
import {Link} from "react-router-dom";

function Singlecoursedetails({courses,role,user}){
//     const [courses,setCourses] = useState([]);
    
//     useEffect(()=>{
//         function getSingleCourses(id){
//             axios.get(`http://localhost:8070/coursedetails/${id}`)
//             .then((res)=>{
//                 console.log(res);
//             setCourses(res.data);
//             }).catch((err)=>{
//                 console.log(err);
//             })
//         }
   
//     getSingleCourses(id);
// },[])
const reqtoenroll=(modid,sid)=>{
    console.log(sid);
    console.log(modid);
    if(window.confirm('Are you sure you want to request to enroll?')){
    axios
    .post(`http://localhost:8070/coursedetails/studentenroll/${sid}&${modid}`,null)
    .then(() => {
      console.log('Success')
      
      alert('added successed!')
    })
}}
    return(
        <div className="singlecourse">
           {courses.map(course=>{
                
                return(
                    <div>
                        <h3 key={course.modid} >{course.modname}</h3>
                        <h3 key={course.modid}>{course.modcode}</h3>
                        <p>{course.descrip}</p>
                        <p>Start : {course.sdate}</p>
                        <p>End : {course.enddate}</p>
                        <p>Teacher : {course.teacherid}</p>
                        <text>{role==='s' ? 
                            <div><p>Price: Rs{course.price}</p><button className="btn btn-warning" onClick={()=>{reqtoenroll(course.modid,user)}}>Enroll</button></div> 
                            : 
                            role==='a' ? 
                            <div><Link to="/assignteacher" state={{ id: course.modid , name:course.modname, code:course.modcode}}><p style={{color:'#f5b042'}}>Assign Teacher</p></Link>
                            
                            </div>
                            :<></>}</text>
                        <hr/>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Singlecoursedetails;