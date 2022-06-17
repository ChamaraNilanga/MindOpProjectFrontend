import React , {useEffect , useState} from "react";
import axios from "axios";
import Searchbar from "../SearchBar/Searchbar";
import "./Allcoursesdelupdlist.css";
import {Link} from "react-router-dom";

function AllcoursesDelUpdlist (){
    const [courses,setCourses] = useState([]);
    
    function getAllCourses(){
        axios.get(`http://localhost:8070/coursedetails`)
        .then((res)=>{
            console.log(res);
        setCourses(res.data);
        }).catch((err)=>{
            console.log(err);
        })
     }
    useEffect(()=>{
       
        getAllCourses();
    },[])
    
    const deletemodule=async (id , e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/coursedetails/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                getAllCourses();
            })
        }
       
    }
    const setID = (id,name,code,star,enddate,descrip,price) => {
        console.log(id);
        localStorage.setItem('id',id);
        localStorage.setItem('coursename',name);
        localStorage.setItem('modcode',code);
        localStorage.setItem('sdate',star);
        localStorage.setItem('edate',enddate);
        localStorage.setItem('price',price);
        localStorage.setItem('description',descrip);
        
    }

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
                            <td class="w-10"><Link to="/updatecourse"><button className="btn btn-warning" onClick={()=>setID(course.modid,course.modname,course.modcode,course.sdate,course.enddate,course.descrip,course.price)}>Update</button></Link></td>
                            <td class="w-15"><button className="btn btn-danger" onClick={()=>deletemodule(course.modid)}>Delete</button></td>
                        </tr>
                    </tbody>
                    
                )
            })}
        </div>
        </div>
    )
}

export default AllcoursesDelUpdlist;