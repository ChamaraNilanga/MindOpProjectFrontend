import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

function Addforumquestion(){

    async function addQuestion({image, question}) {
        const formData = new FormData();
        formData.append("image", image)
        formData.append("question", question)
      
        const result = await axios.post(`http://localhost:8070/forums/question/${cid}&${user}`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
        return result.data
      }
      
    const location = useLocation();
    const { cid , user } = location.state;
    
    const [question , setQuestion] = useState('')
    const [image , setImage] = useState('')

    const submit = async event => {
        // event.preventDefault()
        const result = await addQuestion({image: image, question})
        // setImage([result.image, ...image])
        if(result){
            console.log(result)
            alert(result)
        }else{
            alert("Couldn't accept question")
        }
      }
      const fileSelected = event => {
        const file = event.target.files[0]
            setImage(file);
        }
      
    return(
        
            <form className="courseform">
                <h3 className="head2">Add New Question</h3>
                <div class="form-group">
                    <label for="coursename">Question</label>
                    <textarea class="form-control" id="question" rows="4" onChange={(event) => {
                        setQuestion(event.target.value)
                      }} placeholder="Enter your question" required></textarea>
                   
                    
                </div>
               
                <div class="form-group">
                    <label for="Image">Image of your problem</label>
                    <input type="file" onChange={fileSelected}
                        className="form-control"  accept="image/*"/>
                </div>
                <div className="buttons">
                    <Link to="/forum/questions" ><button type="submit"  style={{backgroundColor: 'white', color: 'black' , border: 'px solid black'}} className="btn btn-primary">Cancel</button></Link>
                    <Link to="/forum/mylist" ><button type="submit" onClick={submit} className="btn btn-primary">Submit</button></Link>
                </div>
                
            </form>
        
    )

};

export default Addforumquestion;