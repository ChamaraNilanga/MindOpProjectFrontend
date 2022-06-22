import React , {useEffect , useState} from "react";
import axios from "axios";
import "./Allcourses.css";
import Subjectcard from "../SubjectCard/Subjectcard";
import Subjectcardgrid from "../SubjectCardGrid/Subjectcardgrid";
import {Link} from "react-router-dom";

function Allcourses({role}){
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
                <Link to="/courseswithdetails"><i class="fa-solid fa-circle-right fa-xl"></i></Link>
            </div>
            {role==='s' ? <Subjectcard courses={courses} text={"Enroll"}/> : role==='c' ? <Subjectcard courses={courses} text={"See>>"}/>:<Subjectcardgrid courses={courses} text={"See>>"}/>}
            
            
        </div>
    )
}

export default Allcourses;