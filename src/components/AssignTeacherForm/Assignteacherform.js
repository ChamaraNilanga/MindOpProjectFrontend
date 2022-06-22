import React, { useState , useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";


function Assignteacher({user}){
    const location = useLocation();
    const { id,name,code } = location.state;
    
    // const [coursename, setCoursename] = useState('')
    // const [modcode, setModcode] = useState('')
    const [teacher, setTeacher] = useState('')


    const Assign = () => {
        console.log(id);
        console.log(user);
        if(window.confirm('Are you sure you want to assign this teacher?')){
        axios
          .put(`http://localhost:8070/coursedetails/assignteacher/${user}&${id}`,{
           tid: teacher,
           })
          .then((res) => {
            console.log(res);
            alert(res.data);
          })
        }
      }
    //   useEffect(()=>{
    //     setCoursename(localStorage.getItem('coursename'));
    //     setModcode(localStorage.getItem('modcode'));
    //     setId(localStorage.getItem('id'));
    //   },[])
      
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Assign Teacher</h3>
                <div class="form-group">
                    <h3>{name}</h3> 
                    <h3>{code}</h3>
                </div>
                
                <div class="form-group">
                    <label for="sdate">Teacher ID</label>
                    <input type="text" value={teacher} onChange={(event) => {
                        setTeacher(event.target.value)
                      }}
                        className="form-control" id="sdate" placeholder="Enter teacher ID" />
                </div>
               
                <div className="buttons">
                    <Link to="/courseswithdetails"><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/courseswithdetails"><button type="submit" onClick={Assign} className="btn btn-primary">Update</button></Link>
                </div>
                
            </form>
        
    )

};

export default Assignteacher;