import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/GradeReport/GradeReport.css";


import {jsPDF} from "jspdf";
import "jspdf-autotable";




function GradeReport(){
    const [filter,setFilter] = useState("");
    const [grades,setGrades] = useState([]);
   
    
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Grade report";
        const headers = [["StudentName", "Index No","Grade"]];
    
        const data = grades.map(elt=> [elt.studentid, elt.username,elt.finalgrade]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("GradeReport.pdf")
      }


    useEffect(()=>{
        
        function getDisplayGrades(){
            axios.get(`http://localhost:8070/quizdetails/viewgradereport/002`).then((res)=>{
                console.log(res);
                setGrades(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDisplayGrades();
    },[])
    
    return(
        
            <div><Navbar />
            <div className="tophead">
          <h1>Grade Report</h1>
        </div><div className="break"></div>
<div className="gradereportcontainer">

<div className="formInput"> <label className="labelname">
 
          <select className="option" value={filter} onChange={(e)=>{
                        setFilter(e.target.value);
          }}>
             
            <option value="enrolled users who have attempted the quiz">enrolled users who have attempted the quiz</option>
            <option value="enrolled users who have not attempted the quiz">enrolled users who have not attempted the quiz</option>
            <option value="enrolled users who have, or have not, attempted">enrolled users who have, or have not, attempted</option>
           
          </select>
        </label></div>
<div className="gradereportcontainerinbound">
        <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Name of the Student</th>
      <th scope="col">Index No</th>
      <th scope="col">Grade</th>
      
    </tr>
  </thead>
  
  {grades.map(grades=>{
                
                return(
                    <tbody>
                        <tr className="dotted" key={grades.id}>
                            <td class="w-25">{grades.studentid}</td>
                            <td class="w-25">{grades.username}</td>
                            <td class="w-25">{grades.finalgrade}</td>
                           
                        </tr>
                    </tbody>
                    
                )
            })}

  
</table></div>
             
<button className="exportbtngrade" onClick={exportPDF}>Export as Pdf</button>
        </div></div>
        

        // onClick={(exportPDF)}
        // onClick={() => this.exportPDF()}
        
          
        
    )};
    

export default GradeReport;