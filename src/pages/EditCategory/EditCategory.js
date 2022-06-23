import "./EditCategory.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link , useLocation } from "react-router-dom";
import React, {  useEffect } from "react";


import axios from "axios";

const EditCategory = () => {

    const location=useLocation();
    const {catname,catID}=location.state;
    // const {catID}=location.state;

  const [categoryname, setCategoryName] = useState("");
  const [categoryid, setCategoryID] = useState("");
 
  const Update = (id) => {
  
    axios
      .put(
        `http://localhost:8070/categorydetails/editcategory/${id}`,
        {
          catname:categoryname,
        
          
           
        }
        
         )
      .then(() => {
        console.log('Success')
        
        alert('Category updated!')
      })

  }
 

  return (
    <div className="new">
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>Add Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form >
              <p>{catID}</p>
              <div className="formInput">
                <label>Type new name</label>
                <input
                  type="text"
                  value={categoryname}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                />
              </div>
              <div className="break"></div>
              
             
              
              

              <div className="break"></div>
              <button className="button" type="submit" onClick={()=>{Update(catID)}}>Update</button>
               <button className="cancelbtn"><Link to='/DisplayCategory'>Cancel</Link></button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EditCategory;