
import React,{ useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import "../../pages/AttemptReport/AttemptReport.css";


import {jsPDF} from "jspdf";
import "jspdf-autotable";




function AttemptReport({user}){
  
    const [attempts,setAttempts] = useState([]);
   
    
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Attempt report";
        const headers = [["QuizID", "Student ID","Attempt Time","Attempt Date","Submitted Time","Final Grade"]];
    
        const data = attempts.map(elt=> [elt.quizid, elt.studentid,elt.attempttime,elt.attemptdate,elt.submittedtime,elt.finalgrade]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("AttemptReport.pdf")
      }


   
        function getDisplayAttempts(){
            axios.get(`http://localhost:8070/quizdetails/displayallattempts`).then((res)=>{
                console.log(res);
                setAttempts(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        } useEffect(()=>{
        getDisplayAttempts();
    },[])


    const deleteattempt=async (qid,studentid)=>{
     
      if(window.confirm('Are you sure you want to delete?')){
          await axios.delete(`http://localhost:8070/quizdetails/deleteattempt/${qid}&${studentid}`)
          .then((res)=>{
              console.log(res.data);
              alert(res.data);
              
          })
      }
     
  }


  const searchattempt=(word,id)=>{
    if(!word){
      getDisplayAttempts(id);
    }else{
    try{
    axios.get(`http://localhost:8070/quizdetails/searchattempt/${word}&${user}`)
    .then((res)=>{
        console.log(res);
        setAttempts(res.data);
    }).catch((err)=>{
        console.log(err);
    })}catch{
        alert("No any Attempt relevant to that details")
    }}
}  
    
    return(
        
            <div><Navbar />
            <div className="tophead">
          <h1>Attempt Report</h1>
        </div><div className="break"></div>


        <div className="searchbarattempt">
      <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" onChange={(event)=>{searchattempt(event.target.value)}} class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fa fa-search"></i>
        </button>
      </div></div>

<div className="attemptcontainer">

 <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th class="th-sm">QuizID
      </th>
      <th class="th-sm">Student ID
      </th>
      <th class="th-sm">Attempt Time
      </th>
      <th class="th-sm">Attempt Date
      </th>
      <th class="th-sm">Submitted Time
      </th>
      <th class="th-sm">Final Grade
      </th>
      <th class="th-sm">Delete Attempt
      </th>
    </tr>
  </thead>
  {attempts.map(attempts=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={attempts.id}>
                            <td class="w-25">{attempts.quizid}</td>
                            <td class="w-25">{attempts.studentid}</td>
                            <td class="w-25">{attempts.attempttime}</td>
                            <td class="w-25">{attempts.attemptdate}</td>
                            <td class="w-25">{attempts.submittedtime}</td>
                            <td class="w-25">{attempts.finalgrade}</td>
                            <td class="w-25"><button className="attemptdeletebtn" onClick={()=>{ deleteattempt(attempts.quizid,attempts.studentid)}}>Delete</button></td>
                           
                        </tr>
                    </tbody>
                    
                )
            })}
  
</table>
  
</div>
      
             
<button className="exportbtnattempt" onClick={exportPDF}>Export as Pdf</button>
        </div>
        

        // onClick={(exportPDF)}
        // onClick={() => this.exportPDF()}
        
          
        
    )};
    

export default AttemptReport;





