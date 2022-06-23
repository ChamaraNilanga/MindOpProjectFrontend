import "./AddCategoryQuiz.css";
 import { useState } from "react";
 import Navbar from "../../components/Navbar/Navbar";

 import { Link } from "react-router-dom";


 import axios from "axios";

 const AddCategoryQuiz = () => {
   const [categoryname, setCategoryName] = useState("");
   const [categoryid, setCategoryID] = useState("");

   const submitForm = (e) => {

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





               <div className="break"></div>
               <button className="button" type="submit" onClick={submitForm}>Add Category</button>
                <button className="cancelbtn"><Link to='/DisplayCategory'>Cancel</Link></button> 
             </form>
           </div>
         </div>
       </div>
     </div>
   );
 };


 export default AddCategoryQuiz;