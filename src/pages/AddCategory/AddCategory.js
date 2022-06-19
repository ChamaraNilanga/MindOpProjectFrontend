import "./AddCategory.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import { Link } from "react-router-dom";


import axios from "axios";

const AddCategory = () => {
  const [categoryname, setCategoryName] = useState("");
  const [categoryid, setCategoryID] = useState("");
  //const [subcategoryid,setSubCategoryID] = useState("");
  //const [subcategoryname,setSubCategoryName] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

  

    // const doCancel = (e) =>{
    //   var history;
    //   props.addExperience(data, window.history);
    //   history.back();
    //   e.preventDefault();
      
     
    
   
    axios
      .post(
        "http://localhost:8070/categorydetails/addcategory",
        {
          catname:categoryname,
          catID:categoryid,
           
        }
        
         )
      .then(() => {
        console.log('Success')
        
        alert('added successed!')
      })

  };

  return (
    <div className="new">
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>Add Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Category Name</label>
                <input
                  type="text"
                  value={categoryname}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                />
              </div>
              <div className="break"></div>
              <div className="formInput">
                <label for="catid" >Category ID</label>
                <input
                  type="text" 
                  value={categoryid}
                  onChange={(e) => {
                    setCategoryID(e.target.value);
                  }}
                />
              </div>

             
              
              {/* <div className="formInput">
                <label>Sub Category Name</label>
                <input
                  type="text"
                  value={subcategoryid}
                  onChange={(e) => {
                    setSubCategoryID(e.target.value);
                  }}
                />
              </div>

              <div className="formInput">
                <label>Sub Category ID</label>
                <input
                  type="text"
                  value={subcategoryname}
                  onChange={(e) => {
                    setSubCategoryName(e.target.value);
                  }}
                />
              </div> 
              <div className="break"></div> */}
              {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      ADD
                    </label>
                  </div>
              <div classname="add-btn">
                  <button class="btn"><i class="fa fa-plus"></i></button>
                  </div>
              <div className="break"></div>
              <ul class="list-group">
                    <li class="list-group-item">Sub category 01</li>
                    <li class="list-group-item">Sub category 02</li>
                    <li class="list-group-item">Sub category 03</li>
                    <li class="list-group-item">Sub category 04</li>
                    <li class="list-group-item">Sub category 05</li>
                  </ul> */}
        

              <div className="break"></div>
              <button className="button" type="submit" onClick={submitForm}>Add Category</button>
               <button className="button"><Link to='/DisplayCategory'>Cancel</Link></button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddCategory;