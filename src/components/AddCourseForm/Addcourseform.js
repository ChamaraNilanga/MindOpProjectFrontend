import React, { useState } from "react";
import axios from "axios";
import "./Addcourseform.css";

function CourseForm(){
    
    const [coursename, setCoursename] = useState('')
    const [description, setDescription] = useState('')
    const [sdate, setSdate] = useState('')
    const [edate, setEdate] = useState('')
    const [price, setPrice] = useState('')
    const [modcode, setModcode] = useState('')

    const addCourse = () => {
        axios
          .post('http://localhost:8070/coursedetails/', {
            modname: coursename,
            descrip: description,
            sdate: sdate,
            enddate: edate,
            price: price,
            modcode: modcode,
          })
          .then(() => {
            console.log('Success')
            
            alert('added successed!')
          })
      }
  
      
      
    return(
        <div className="courseforum">
            <h3>Add New Course</h3>
                <form>
                <div class="form-group">
                    <label for="coursename">Course Name</label>
                    <input type="text" onChange={(event) => {
                        setCoursename(event.target.value)
                      }}
                        className="form-control" id="coursename"  placeholder="Enter course name"/>
                    
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input  type="text" onChange={(event) => {
                        setDescription(event.target.value)
                      }}
                        className="form-control" id="description" placeholder="Enter the Module description"/>
                </div>
                <div class="form-group">
                    <label for="sdate">Start Date</label>
                    <input type="date" onChange={(event) => {
                        setSdate(event.target.value)
                      }}
                        className="form-control" id="sdate" placeholder="Start date"/>
                </div>
                <div class="form-group">
                    <label for="edate">End Date</label>
                    <input type="date" onChange={(event) => {
                        setEdate(event.target.value)
                      }}
                        className="form-control" id="edate" placeholder="End date"/>
                </div>
                <div class="form-group">
                    <label for="price">Course Price</label>
                    <input  type="price" onChange={(event) => {
                        setPrice(event.target.value)
                      }}
                        className="form-control" id="price" placeholder="price"/>
                </div>
                <div class="form-group">
                    <label for="modcode">Module Code</label>
                    <input type="modcode" onChange={(event) => {
                        setModcode(event.target.value)
                      }}
                        className="form-control" id="modcode" placeholder="modcode"/>
                </div>
                
                <button type="submit" onClick={addCourse} className="btn btn-primary">Submit</button>
                </form>
        </div>
    )

};

export default CourseForm;