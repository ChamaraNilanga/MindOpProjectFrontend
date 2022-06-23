import axios from "axios";
import React,{useState} from "react";
import './Searchbar.css';

 function Searchbar(){
    const Search=(word)=>{
        axios.get(`http://localhost:8070/coursedetails/${word}`)
        .then((res)=>{
            console.log(res);
        setCourses(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const [courses,setCourses] = useState([]);
    
    
    return(
        
        <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search" onChange={(event)=>{Search(event.target.value)}} class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fas fa-search"></i>
        </button>
      </div>
        
    )
 }

 export default Searchbar;