import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Addforumcomment({user}){
    const location = useLocation();
    const { fid , name } = location.state;
    console.log(fid)
    console.log(name)
    const [comment , setComment] = useState('')
    

    const addComment = () => {
        axios
          .post(`http://localhost:8070/forums/comment/${user}&${fid}`, {
            comment: comment,
            
          })
          .then(() => {
            console.log('Success')
            
            alert('Added successed!')
          })
      }
      
      
      
    return(
        
            <form className="courseform">
                <h3>{name}</h3>
                <div class="form-group">
                    <label for="coursename">Your Comment</label>
                    <textarea class="form-control" id="question" rows="3" onChange={(event) => {
                        setComment(event.target.value)
                      }} placeholder="Enter your question" required></textarea>
                    
                </div>
               
                
                <div className="buttons">
                    <Link to="/forum/single" state={{fid:fid,name:name}}><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/forum/single" state={{fid:fid,name:name}}><button type="submit" onClick={addComment} className="btn btn-primary">Submit</button></Link>
                </div>
                
            </form>
        
    )

};

export default Addforumcomment;