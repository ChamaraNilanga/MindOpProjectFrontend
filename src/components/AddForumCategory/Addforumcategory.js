import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import "./Addforumcategory.css";
import {Link} from "react-router-dom";

function Addforumcategory(){
    
    const [catname, setCatname] = useState('')
    

    const addforumcategory = () => {
        axios
          .post(`http://localhost:8070/forums/category`, {
            name: catname,
            
          })
          .then(() => {
            console.log('Success')
            
            alert('added successed!')
          })
      }
      
      
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Add Forum Category</h3>
                <div class="form-group">
                    <label for="catname">Category Name</label>
                    <input type="text" onChange={(event) => {
                        setCatname(event.target.value)
                      }}
                        className="form-control" id="catname"  placeholder="Enter category name" required/>
                    
                </div>
                
                <div className="buttons">
                    <Link to="/forum" ><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/forum" ><button type="submit"  className="btn btn-primary" onClick={addforumcategory}>Submit</button></Link>
                </div>
                
            </form>
        
    )

};

export default Addforumcategory;