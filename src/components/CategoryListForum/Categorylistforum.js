import React from "react";
import { Card } from "react-bootstrap";

function Categorylistforum({categories}){
    return(
        <div className="overflow-auto">
        <div className="subject-card-grid">
            {categories.map(category=>{
                
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Card.Title key={category.fcategoryid}>{category.name_}</Card.Title>
                     </Card.Body>
                    
                    </Card>
                    
                )
            })}
        </div>
        </div>
    )
}

export default Categorylistforum;