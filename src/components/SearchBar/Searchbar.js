import React from "react";
import './Searchbar.css';

 function Searchbar(){
    return(
        
        <div className="input-group">
        <div className="form-outline">
          <input id="search-input" type="search"  class="form-control" placeholder="Search"/>
          
        </div>
        <button id="search-button" type="button" class="btn btn-warning">
          <i className="fas fa-search"></i>
        </button>
      </div>
        
    )
 }

 export default Searchbar;