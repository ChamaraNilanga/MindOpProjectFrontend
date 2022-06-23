
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "../../pages/QuizReports/QuizReports.css";
import Reporticon01 from "../../images/reporticon01.png";


function QuizReports(){

   
    
    return(
        
            <div><Navbar />
            <div className="tophead">
          <h1>Quiz Reports</h1>
        </div><div className="break"></div>
<div className="reportcontainer">
        <div className="row m-2">
        <div className="card01">
        <h5 className="reportcardtitle">Grade Report</h5>
  <img className="card-img-top" src={Reporticon01} alt="Card image cap"/>
  <div className="cardbody">
    
   
    <Link to="/GradeReport" className="viewlink">  View Report</Link>
       </div>
      </div>

      <div className="card02">
      <h5 className="reportcardtitle2">Responses Report</h5>
  <img className="card-img-top" src={Reporticon01} alt="Card image cap"/>
  <div className="cardbody">
  <Link to="/ResponsesReport" className="viewlink">  View Report</Link>
       </div>
      </div>


      <div className="card03">
      <h5 className="reportcardtitle">Statistics Report</h5>
  <img className="card-img-top" src={Reporticon01} alt="Card image cap"/>
  <div className="cardbody">
  <Link to="/StatisticsReport" className="viewlink">  View Report</Link>
       </div>
      </div>

      <div className="card04">
      <h5 className="reportcardtitle">Attempt report</h5>
  <img className="card-img-top" src={Reporticon01} alt="Card image cap"/>
  <div className="cardbody">
  <Link to="/AttemptReport" className="viewlink">  View Report</Link>
       </div>
      </div>

        </div></div>
        <button className="cancelbtn2"><Link to='/DisplayCategory'>Back to course</Link></button> 
        </div>
        

        
        
          
        
    )};
    

export default QuizReports;





