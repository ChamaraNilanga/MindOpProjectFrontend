import React , {useEffect , useState} from "react";
import axios from "axios";
import Searchbar from "../SearchBar/Searchbar";
import "./Enrollmentreqlist.css";

function Enrollreqlist ({id}){
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getEnrollreqlist(id){
            axios.get(`http://localhost:8070/coursedetails/studentreq/${id}`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
         }
        getEnrollreqlist(id);
    },[])

    return(
        <div className="allcourselist">
            <div className="headoflist">
                <h3>Enrollment Request For Module</h3>
                <div className="searchbox"><Searchbar/></div>
            </div>
            

            <div className="table table-striped table-light">
            <thead className="tablehead">
                    <th>Student</th>
                    <th>Module Name</th>
                    <th>Student email</th>
                    <th>User ID</th>
                    <th></th>
                    <th></th>
                </thead>
            {courses.map(course=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={course.requestedid}>
                            <td class="w-25">{course.username}</td>
                            <td class="w-25">{course.modname}</td>
                            <td class="w-100">{course.email}</td>
                            <td class="w-100">{course.userid}</td>
                            <td class="w-10"><i class="fa-solid fa-circle-check fa-xl"></i></td>
                            <td class="w-15"><i class="fa-solid fa-circle-xmark fa-xl"></i></td>
                        </tr>
                    </tbody>
                    
                )
            })}
        </div>
        </div>
    )
}

export default Enrollreqlist;