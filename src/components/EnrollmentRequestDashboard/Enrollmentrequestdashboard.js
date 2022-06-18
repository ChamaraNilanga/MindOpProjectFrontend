import React , {useEffect , useState} from "react";
import axios from "axios";
import "./Enrollmentrequestdashboard.css";

function Enrollmentreqdash ({id}) {
    const [requests,setRequests] = useState([]);
    
    useEffect(()=>{
        function getEnrollreqcourses(){
            axios.get(`http://localhost:8070/coursedetails/studentreq/${id}`)
            .then((res)=>{
                console.log(res);
            setRequests(res.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
   
        getEnrollreqcourses();
},[])
    return(
    <div className="enrollreqdash">
        <h4>Enrollment Requests</h4>
        <div className="requsets">
            <ul>
            {requests.slice(0, 5).map(request=>{
                return(
                    <li key={request.requestedid}>{request.username}</li>
                )
            })}
            </ul>
           
            
        </div>
       <a href="/courselist">SEE LIST</a>
      
    </div>
    )
}

export default Enrollmentreqdash;