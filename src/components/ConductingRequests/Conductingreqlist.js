import React , {useEffect , useState} from "react";
import axios from "axios";
import Searchbar from "../SearchBar/Searchbar";
import "./Conductingreqlist.css";

function Conductreqlist (){
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getConductreqlist(){
            axios.get(`http://localhost:8070/coursedetails/teacherreq`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
         }
        getConductreqlist();
    },[])

    return(
        <div className="allcourselist">
            <div className="headoflist">
                <h3>Conducting Request For Module</h3>
                <div className="searchbox"><Searchbar/></div>
            </div>
            

            <div className="table table-striped table-light">
                <thead className="tablehead">
                    <th>Teacher ID</th>
                    <th>Module Code</th>
                    <th>Module Name</th>
                    <th>Teacher</th>
                    <th></th>
                    <th></th>
                </thead>
            
            {courses.map(course=>{
                
                return(
                    <tbody>
                        <tr className="dotted">
                            <td class="w-25">{course.tid}</td>
                            <td class="w-25">{course.modcode}</td>
                            <td class="w-50">{course.modname}</td>
                            <td class="w-50">{course.username}</td>
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

export default Conductreqlist;