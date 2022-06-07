import React , {useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import Progressbar from "../Progressbar/Progressbar";
import "./Subjectcard.css";

function Subjectcard ({courses , role}){
     return(
        <div class="overflow-auto">
        <div className="subject-card">
            {courses.map(course=>{
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Card.Title key={course.modid}>{course.modname}</Card.Title>
                    <Card.Text className="text" key={course.modid}>
                    {course.descrip}
                    </Card.Text>
                    
                    </Card.Body>
                    <Card.Footer>
                        {role=='s' ? <Progressbar progress={course.progress}/> :<Button className="btn" variant="warning" key={course.modid}>Enroll</Button>}
                        {/* <Button className="btn" variant="warning" key={course.modid}>Enroll</Button> */}
                    </Card.Footer>
                    </Card>
                    
                )
            })}
        </div>
        </div>
       
        
    )
}

export default Subjectcard;