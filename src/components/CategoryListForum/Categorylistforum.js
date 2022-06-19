import React from "react";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Categorylistforum.css"

function Categorylistforum({categories}){
    return(
        <div className="overflow-auto">
        <div className="subject-card-grid">
            {categories.map(category=>{
                
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Link to="/forum/questions" state={{id:category.fcategoryid , name:category.name_}} style={{color:'black'}}><Card.Title key={category.fcategoryid}>{category.name_}</Card.Title></Link>
                     </Card.Body>
                    
                    </Card>
                    
                )
            })}
        </div>
        </div>
    )
}

export default Categorylistforum;