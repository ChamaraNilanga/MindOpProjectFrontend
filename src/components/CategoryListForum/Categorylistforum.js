import React from "react";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Categorylistforum.css";
import axios from "axios";

function Categorylistforum({categories,role}){
    const deleteCategory=async (id , e)=>{
        console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8070/forums/category/${id}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                
            })
        }
       
    }
    return(
        <div className="overflow-auto">
        <div className="subject-card-grid-forum">
            {categories.map(category=>{
                
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Link to="/forum/questions" state={{id:category.fcategoryid , name:category.name_}} style={{color:'black'}}><Card.Title key={category.fcategoryid}>{category.name_}</Card.Title></Link>
                     </Card.Body>
                    <Card.Footer>
                        {role==='a' ? <Link to="/forums"><i class="fa-solid fa-trash-can" style={{color:'red', marginLeft:'85%'}} onClick={()=>{deleteCategory(category.fcategoryid)}}></i></Link>:<></>}
                    </Card.Footer>
                    </Card>
                    
                )
            })}
        </div>
        </div>
    )
}

export default Categorylistforum;