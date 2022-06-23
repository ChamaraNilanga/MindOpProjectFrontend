
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/StatisticsReport/StatisticsReport.css";


import {jsPDF} from "jspdf";
import "jspdf-autotable";




function StatisticsReport(){
   
    const [statistics,setstatistics] = useState([]);
   
    
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Statistics Report";
        const headers = [["Quiz name", "Course name","Total no. of attempts","Avg.grade","Median grade","Standard deviation","Skewness and kurtosis"]];
    
        const data = statistics.map(elt=> [elt.studentid, elt.username,elt.finalgrade]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("StatisticsReport.pdf")
      }


    // useEffect(()=>{
    //     function getDisplayGrades(){
    //         axios.get(`http://localhost:8070/quizdetails/viewgradereport/002`).then((res)=>{
    //             console.log(res);
    //             setGrades(res.data);
    //         }).catch((err)=>{
    //             alert(err.message);
    //         })
    //     }
    //     getDisplayGrades();
    // },[])
    
    return(
        
            <div><Navbar />
            <div className="tophead">
          <h1>Statistics Report</h1>
        </div><div className="break"></div>

<div className="statisticsreportcontainer">

 
  <table class="table">
    <thead>
      
    </thead>
    <tbody>
         
      <tr class="table-success">
        <td>Quiz name:</td>
        <td>Quiz 01</td>
        
      </tr>
      <tr class="table-danger">
        <td>Course Name:</td>
        <td>History</td>
        
      </tr>
      <tr class="table-info">
        <td>Total number of graded attempts:</td>
        <td>10</td>
        
      </tr>
      <tr class="table-success">
        <td>Average grade:</td>
        <td>65</td>
        
      </tr>
      <tr class="table-danger">
        <td>Median grade:</td>
        <td>60</td>
        
      </tr>
      <tr class="table-info">
        <td>Standard deviation of grades:</td>
        <td>1.4566</td>
        
      </tr>
      <tr class="table-success">
        <td>Skewness and Kurtosis of the grade :</td>
        <td>1.3256</td>
        
      </tr>
    </tbody>
  </table>
</div>
      
             
<button className="exportbtnstat" onClick={exportPDF}>Export as Pdf</button>
        </div>
        

        // onClick={(exportPDF)}
        // onClick={() => this.exportPDF()}
        
          
        
    )};
    

export default StatisticsReport;





