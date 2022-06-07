import React , {useEffect , useState} from "react";
import axios from "axios";
import "./Allcourses.css";
import Subjectcard from "../SubjectCard/Subjectcard";

function Allcourses(){
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
        <div className="Container">
            <div className="head">
                <h3 className="head3">All Courses</h3>
                <i class="fa-solid fa-circle-right fa-xl"></i>
            </div>
            
            <Subjectcard courses={courses}/>
            
        </div>
    )
}

export default Allcourses;