import React , {useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import Progressbar from "../Progressbar/Progressbar";
import "./Subjectcard.css";

function Subjectcard (func){
    
    const [courses,setCourses] = useState([]);
    
    useEffect(()=>{
        function getAllCourses(){
            axios.get(`http://localhost:8070/coursedetails`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        //loged user id
        function getEnrolledCourses(id){
            axios.get(`http://localhost:8070/coursedetails//enroll/&id`)
            .then((res)=>{
                console.log(res);
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
        
        getAllCourses();
        
    },[])

   
    return(
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
        
                        <Button className="btn" variant="warning" key={course.modid}>Enroll</Button>
                    </Card.Footer>
                    </Card>
                )
            })}
        </div>
       
        
    )
}

export default Subjectcard;