import React , {useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Singlecoursedetails from "../../components/SingleCourseDetails/Singlecoursedetails";
import axios from "axios";


function Stuteacherallcourses({role}){
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getAllCourses(){
            axios.get(`http://localhost:8070/coursedetails`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }

    getAllCourses();
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

export default Stuteacherallcourses;