import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Singlecoursedetails from "../../components/SingleCourseDetails/Singlecoursedetails";

function Singlecoursedetailspage({id , role}){
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getSingleCourses(id){
            axios.get(`http://localhost:8070/coursedetails/${id}`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
   
    getSingleCourses(id);
},[])
    return(
        <div>
        <header><Navbar/></header>
        <div>
            <Singlecoursedetails courses={courses} role={role}/>
        </div>
        </div>
    )
}

export default Singlecoursedetailspage;