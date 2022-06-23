import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import "./Addcourseform.css";
import {Link} from "react-router-dom";
import  DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CourseForm(){
    
    const [coursename, setCoursename] = useState('')
    const [description, setDescription] = useState('')
    const [sdate, setSdate] = useState('')
    const [edate, setEdate] = useState('')
    const [price, setPrice] = useState('')
    const [modcode, setModcode] = useState('')
    const addCourse = () => {
        axios
          .post(`http://localhost:8070/coursedetails/`, {
            modname: coursename,
            descrip: description,
            star: sdate,
            end: edate,
            price: price,
            modcode: modcode,
          })
          .then(() => {
            console.log('Success')
            
            alert('added successed!')
          })
      }
      const priceisvalid=(val)=>{
        if(val<0){
          alert("Price can not be (-) value");
        }else{
          setPrice(val);
        }
      }
      
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Add New Course</h3>
                <div class="form-group">
                    <label for="coursename">Course Name</label>
                    <input type="text" onChange={(event) => {
                        setCoursename(event.target.value)
                      }}
                        className="form-control" id="coursename"  placeholder="Enter course name" required/>
                    
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input  type="text" onChange={(event) => {
                        setDescription(event.target.value)
                      }}
                        className="form-control" id="description" placeholder="Enter the Course description" maxLength={100}/>
                </div>
                <div class="form-group">
                    <label for="sdate">Start Date</label>
                    {/* <input type="date" onChange={(event) => {
                        setSdate(event.target.value)
                      }}
                        className="form-control" id="sdate" placeholder="Start date" /> */}
                        <DatePicker selected={sdate} onChange={date => 
                        setSdate(date)
                      } minDate={new Date()} dateFormat='yyyy/MM/dd'/>
                </div>
                <div class="form-group">
                    <label for="edate">End Date</label>
                    {/* <input type="date" onChange={(event) => {
                        setEdate(event.target.value)
                      }}
                        className="form-control" id="edate" placeholder="End date" /> */}
                        <DatePicker selected={edate} onChange={date => {
                        setEdate(date)
                      }} 
                      dateFormat='yyyy/MM/dd' value={sdate} minDate={sdate}/>
                </div>
                <div class="form-group">
                    <label for="price">Course Price</label>
                    <input  type="money" onChange={(event) => {
                        priceisvalid(event.target.value)
                      }}
                        className="form-control" id="price" placeholder="Enter price" />
                </div>
                <div class="form-group">
                    <label for="modcode">Module Code</label>
                    <input type="modcode" onChange={(event) => {
                        setModcode(event.target.value)
                      }}
                        className="form-control" id="modcode" placeholder="Enter course code" required/>
                </div>
                <div className="buttons">
                    <Link to="/home" ><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/course/list" ><button type="submit" onClick={addCourse} className="btn btn-primary">Submit</button></Link>
                </div>
                
            </form>
        
    )

};

export default CourseForm;