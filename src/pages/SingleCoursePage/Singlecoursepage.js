import React,{useEffect,useState} from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Singlecoursedetails from "../../components/SingleCourseDetails/Singlecoursedetails";
import { useLocation } from "react-router-dom";

function Singlecoursedetailspage({role}){
    const [courses,setCourses] = useState([]);
    const location = useLocation()
    const { id } = location.state
    console.log(id);
    function getSingleCourses(id){
        axios.get(`http://localhost:8070/coursedetails/${id}`)
        .then((res)=>{
            console.log(res);
        setCourses(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }   
    useEffect(()=>{
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