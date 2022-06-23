//import "./AddSubCategory.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import { Link } from "react-router-dom";


import axios from "axios";

const AddSubCategory = ({id}) => {
  const [subcategoryname, setSubCategoryName] = useState("");
  const [subcategoryid, setSubCategoryID] = useState("");
 
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8070/categorydetails/addsubcategory/${id}`,
        {
          subcatID:subcategoryname,
          subcatname:subcategoryid,
           
        }
        
         )
      .then(() => {
        console.log('Success')
        
        alert('Sub category added!')
      })

  };

  return (
    <div className="new">
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>Add Sub Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Sub Category Name</label>
                <input
                  type="text"
                  value={subcategoryname}
                  onChange={(e) => {
                    setSubCategoryName(e.target.value);
                  }}
                />
              </div>
              <div className="break"></div>
              <div className="formInput">
                <label for="catid" >Category ID</label>
                <input
                  type="text" 
                  value={subcategoryid}
                  onChange={(e) => {
                    setSubCategoryID(e.target.value);
                  }}
                />
              </div>

            <div className="break"></div>
              <button className="button" type="submit" onClick={submitForm}>Add </button>
               <button className="cancelbtn"><Link to='/DisplayQuestion'>Cancel</Link></button> 
               
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddSubCategory;