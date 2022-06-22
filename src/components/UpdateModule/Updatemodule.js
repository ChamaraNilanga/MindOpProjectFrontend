import React, { useState , useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import {Link} from "react-router-dom";


function UpdateCourse(){
    
    const [coursename, setCoursename] = useState('')
    const [description, setDescription] = useState('')
    const [sdate, setSdate] = useState('')
    const [edate, setEdate] = useState('')
    const [price, setPrice] = useState('')
    const [modcode, setModcode] = useState('')
    const [id, setId] = useState('')


    const Update = () => {
        console.log(id);
        axios
          .put(`http://localhost:8070/coursedetails/${id}`, {
           
            descrip: description,
            start: sdate,
            end: edate,
            price: price,
            
          })
          .then(() => {
            console.log('Success')
            
            alert('Update successed!')
          })
      }
      useEffect(()=>{
        setCoursename(localStorage.getItem('coursename'));
        setDescription(localStorage.getItem('description'));
        setSdate(localStorage.getItem('sdate'));
        setEdate(localStorage.getItem('edate'));
        setPrice(localStorage.getItem('price'));
        setModcode(localStorage.getItem('modcode'));
        setId(localStorage.getItem('id'));
      },[])
      
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Update Course</h3>
                <div class="form-group">
                    <h3>{coursename}</h3> 
                    <h3>{modcode}</h3>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input  type="text" value={description} onChange={(event) => {
                        setDescription(event.target.value)
                      }}
                        className="form-control" id="description" placeholder="Enter the Course description" maxLength={100}/>
                </div>
                <div class="form-group">
                    <label for="sdate">Start Date</label>
                    <input type="date" value={sdate} onChange={(event) => {
                        setSdate(event.target.value)
                      }}
                        className="form-control" id="sdate" placeholder="Start date" />
                </div>
                <div class="form-group">
                    <label for="edate">End Date</label>
                    <input type="date" value={edate} onChange={(event) => {
                        setEdate(event.target.value)
                      }}
                        className="form-control" id="edate" placeholder="End date" />
                </div>
                <div class="form-group">
                    <label for="price">Course Price</label>
                    <input  type="money" value={price} onChange={(event) => {
                        setPrice(event.target.value)
                      }}
                        className="form-control" id="price" placeholder="Enter price"/>
                </div>
                <div className="buttons">
                    <Link to="/course/list"><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/course/list"><button type="submit" onClick={Update} className="btn btn-primary">Update</button></Link>
                </div>
                
            </form>
        
    )

};

export default UpdateCourse;