import React , {useEffect , useState} from "react";
import axios from "axios";
import "./EnOrConcourses.css";
import Subjectcard from "../SubjectCard/Subjectcard";
import { useParams } from "react-router-dom";


function EnrollConductcourses({id , role}){
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getEnrollConductcourses(id){
            axios.get(`http://localhost:8070/coursedetails/enroll/${id}`,{
                params: {
                  id: {id},
                },
              })
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
   
    getEnrollConductcourses(id);
},[])
    return(
        <div className="Container">
            <div className="head1">
                {role==='s' ? <h3 className="head3">Enroll Courses</h3> : <h3 className="head3">Conducting Courses</h3>}
                
                <i class="fa-solid fa-circle-right fa-xl"></i>
            </div>
            
            <Subjectcard courses={courses} role={role}/>
            
        </div>
    )
}

export default EnrollConductcourses;