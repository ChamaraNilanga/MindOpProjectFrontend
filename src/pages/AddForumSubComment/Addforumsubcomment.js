import React,{useState,useEffect} from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import {Link,useLocation} from "react-router-dom";

function Addforumsubcomment({user}){
    const location = useLocation();
    const { cid , name , commentbody , fid,keyimage} = location.state;
    console.log(cid)
    const [subcomment , setSubcomment] = useState('')
    

    const addSubcomment = (cid,user) => {
        axios
          .post(`http://localhost:8070/forums/subcomment/${cid}&${user}`, {
            comment: subcomment,
            
          })
          .then(() => {
            console.log('Success')
            
            alert('Added successed!')
          })
      }
      
      
      
    return(
        <div>
            <header><Navbar/></header>
        <div>
            <form className="courseform">
                <h3>{name}</h3>
                <p style={{color:'white'}}>{commentbody}</p>
                <div class="form-group">
                    <label for="coursename">Your Comment</label>
                    <textarea class="form-control" id="comment" rows="3" onChange={(event) => {
                        setSubcomment(event.target.value)
                      }} placeholder="Enter your comment"></textarea>
                    
                </div>
               
                
                <div className="buttons">
                    <Link to="/forum/single" state={{cid:cid,name:name , fid:fid,keyimage:keyimage}}><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/forum/single" state={{cid:cid,name:name ,fid:fid,keyimage:keyimage}}><button type="submit" onClick={()=>{addSubcomment(cid,user)}} className="btn btn-primary">Submit</button></Link>
                </div>
                
            </form>
            </div>
            </div>
    )
}

export default Addforumsubcomment;