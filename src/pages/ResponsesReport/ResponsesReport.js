
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/ResponsesReport/ResponsesReport.css";



import {jsPDF} from "jspdf";
import "jspdf-autotable";




function ResponsesReport(){
    
    const [responses,setResponses] = useState([]);
   
    
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Responses report";
        const headers = [["Student Name", "Given Answer","Status"]];
    
        const data = responses.map(elt=> [elt.username, elt.givenanswer,elt.status_]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("Responses Report.pdf")
      }


    useEffect(()=>{
        function getDisplayResponses(){
            axios.get(`http://localhost:8070/quizdetails/viewresponsesreport/002`).then((res)=>{
                console.log(res);
                setResponses(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDisplayResponses();
    },[])
    
    return(
        
            <div><Navbar />
            <div className="tophead">
          <h1>Responses Report</h1>
        </div><div className="break"></div>


        <div class="gridcontainer">
  <div class="row">
    <div class="col">Q. No.</div>
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
    <div class="col">7</div>
    <div class="col">8</div>
    <div class="col">9</div>
    <div class="col">10</div>

  </div>
  
</div>

<div class="gridcontainer2">
<table class="table table-hover">
<tbody>
<tr>
<td>Question Text</td></tr>
<tr><td>Correct Answer</td></tr>
</tbody>
  </table>
</div>

        
<div className="responsesreportcontainer">



        <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Given Answer</th>
      <th scope="col">Status</th>
      
    </tr>
  </thead>
  
  {responses.map(responses=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={responses.id}>
                            <td class="w-25">{responses.username}</td>
                            <td class="w-25">{responses.givenanswer}</td>
                            <td class="w-25">{responses.status_}</td>
                           
                        </tr>
                    </tbody>
                    
                )
            })}

  
</table>
             
<button className="exportbtn" onClick={exportPDF}>Export as Pdf</button>
        </div></div>
        

        // onClick={(exportPDF)}
        // onClick={() => this.exportPDF()}
        
          
        
    )};
    

export default ResponsesReport;





