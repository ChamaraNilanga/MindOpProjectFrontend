import React , {useEffect,useState} from "react";
import axios from "axios";
import "./Singlecoursedetails.css";

function Singlecoursedetails({courses,role}){
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
    return(
        <div className="singlecourse">
           {courses.map(course=>{
                
                return(
                    <div>
                        <h3 key={course.modid}>{course.modname}</h3>
                        <h3 key={course.modid}>{course.modcode}</h3>
                        <p>{course.descrip}</p>
                        <p>Start : {course.sdate}</p>
                        <p>End : {course.enddate}</p>
                        {/* <text>Teacher : {course.teacherid}</text> */}
                        <text>{role==='s' ? <button className="btn btn-warning">Enroll</button> : <></>}</text>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Singlecoursedetails;