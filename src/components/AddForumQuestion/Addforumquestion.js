import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Addforumquestion(){
    const location = useLocation();
    const { cid , user } = location.state;
    
    const [question , setQuestion] = useState('')
    const [image , setImage] = useState('')
    

    const addQuestion = () => {
        axios
          .post(`http://localhost:8070/forums/question/${cid}&${user}`, {
            question: question,
            image : image,
            
          })
          .then(() => {
            console.log('Success')
            
            alert('added successed!')
          })
      }
      
      
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Add New Question</h3>
                <div class="form-group">
                    <label for="coursename">Question</label>
                    <input type="text" onChange={(event) => {
                        setQuestion(event.target.value)
                      }}
                        className="form-control" id="question"  placeholder="Enter your question" required/>
                    
                </div>
               
                <div class="form-group">
                    <label for="Image">Image of your problem</label>
                    <input type="file" onChange={(event) => {
                        setImage(event.target.value)
                      }}
                        className="form-control" id="image"/>
                </div>
                <div className="buttons">
                    <Link to="/forum/questions" ><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/forum/mylist" ><button type="submit" onClick={addQuestion} className="btn btn-primary">Submit</button></Link>
                </div>
                
            </form>
        
    )

};

export default Addforumquestion;