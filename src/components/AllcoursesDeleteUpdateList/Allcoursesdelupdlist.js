import React , {useEffect , useState} from "react";
import axios from "axios";
import Searchbar from "../SearchBar/Searchbar";
import "./Allcoursesdelupdlist.css";

function AllcoursesDelUpdlist (){
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
    
    // const deletemodule=(id , e)=>{
    //     if(window.confirm('Are you sure you want to delete?')){
    //         axios.delete(`http://localhost:8070/coursedetails/${id}`)
    //         .then((response)=>{
    //             console.log(response);
    //         })
    //     }
    // }

    return(
        <div className="allcourselist">
            <div className="headoflist">
                <h3>All Courses In Learny</h3>
                <div className="searchbox"><Searchbar/></div>
            </div>
            

            <div className="table table-striped table-light">
            
            {courses.map(course=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={course.modid}>
                            <td class="w-25">{course.modname}</td>
                            <td class="w-25">{course.modcode}</td>
                            <td class="w-100">{course.descrip}</td>
                            <td class="w-10"><button className="btn btn-warning" >Update</button></td>
                            <td class="w-15"><button className="btn btn-danger" >Delete</button></td>
                        </tr>
                    </tbody>
                    
                )
            })}
        </div>
        </div>
    )
}

export default AllcoursesDelUpdlist;