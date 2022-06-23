import React, { useState } from "react";
import "./SelectQuestionType.css";
import { Link } from "react-router-dom";

export default function SelectQuestionType() {
  
  const [mcq,setMCQ]=useState("");
  const [truefalse,setTrueFalse]=useState("");
  const [draganddrop,setDragAndDrop]=useState("");
  
  return (
    <div className="Qtypeontainer">
      <h2 className="typetext">Select question type from here</h2>
      <div className="break"></div>
              <div className="radiobtncontainer">
              <div className="radio">
          <label>
            <input
              type="radio"
              value={mcq}
              checked={mcq == "mcq"}
              onChange={(e) => {
                setMCQ(e.target.value);
              }}
            />
            MCQ
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={truefalse}
              checked={truefalse == "truefalse"}
              onChange={(e) => {
                setTrueFalse(e.target.value);
              }}
            />
            True/False
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={draganddrop}
              checked={draganddrop == "draganddrop"}
              onChange={(e) => {
                setDragAndDrop(e.target.value);
              }}
            />
            Drag and Drop
          </label>
          
        </div></div><button className="gobtn"><Link to='/AddQuestion'>Go</Link></button> </div>

  );
}
