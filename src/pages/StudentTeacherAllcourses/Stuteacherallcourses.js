import React , {useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Singlecoursedetails from "../../components/SingleCourseDetails/Singlecoursedetails";
import axios from "axios";
import  Sidestyleicon  from "../../components/SideStyleIcon/Sidestyleicon";
import "./Studentteacher.css";


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
            <div className="alliconwithlist">
                <Singlecoursedetails courses={courses} role={role}/>
                <Sidestyleicon/>
            </div>
        </div>
    )
}

export default Stuteacherallcourses;