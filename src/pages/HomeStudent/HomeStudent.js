import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Allcourses from "../../components/Allcourses/Allcourses";
import EnrollConductcourses from "../../components/EnrollOrConductcourses/EnOrConcourses";
import "./HomeStudent.css";

function HomeStudent({role,id}){
    return(
        <div>
            <header><Navbar/></header>
           {role==='a' ? 
           <div className="div3"><Allcourses role={role}/></div>
        :
        <div><div className="div1"><EnrollConductcourses id={id} role={role}/></div>
        <div className="div2"><Allcourses role={role}/></div></div>
        }
            
           
         </div>
        // <div className="home">
        //     <header><Navbar/></header>
        //     {role==='a' ? 
        //         <div className="container-box"></div> 
        //         : role==='c' ? 
        //             <div className="container-box"></div> 
        //             : 
        //             <div className="student-container"></div>}
        // </div>
        
    )
}

export default HomeStudent;