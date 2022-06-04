import React from "react";
import propTypes from "prop-types";
import "./Progressbar.css";

function Progressbar({value}){
    //need to pass the value from database progress precentge
    return(
        <progress className="progress-bar" value={value} max={100}></progress>
    )
}
Progressbar.propTypes={
    value : propTypes.number.isRequired,
}

export default Progressbar;