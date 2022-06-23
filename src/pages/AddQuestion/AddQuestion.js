import "./AddQuestion.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link} from "react-router-dom";



const AddQuestion = ({id}) => {
  
  

  const [questiontext, setQuestionText] = useState("");
  const [points, setPoints] = useState("");
  const [questionname, setQuestionName] = useState("");
  
  const [answer01, setAnswer01] = useState("");
  const [answer02, setAnswer02] = useState("");
  const [answer03, setAnswer03] = useState("");
  const [answer04, setAnswer04] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8070/questiondetails/createquestion/${id}`,
        {
            questiontext:questiontext,
            mark:points,
            questionname:questionname,
            answer01:answer01,
            answer02:answer02,
            answer03:answer03,
            answer04:answer04
           
        }
      )
      .then(() => {
        console.log('Success')
        
        alert('MCQ Added!')
      })
  };

  return (
    <div className="new">
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>Multiple Choice Questions</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
            <div className="formInput">
                <label>Question text</label>
                <input
                  type="text"
                  value={questiontext}
                  onChange={(e) => {
                    setQuestionText(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Points</label>
                <input
                  type="text"
                  value={points}
                  onChange={(e) => {
                    setPoints(e.target.value);
                  }}
                />
              </div>

          
      
              <div className="formInput">
                <label>Question Name</label>
                <input
                  type="text"
                  value={questionname}
                  onChange={(e) => {
                    setQuestionName(e.target.value);
                  }}
                />
              </div>
             
            

              <div className="formInput">
                <label>Answer01</label>
                <input
                  type="text"
                  value={answer01}
                  onChange={(e) => {
                    setAnswer01(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Answer02</label>
                <input
                  type="text"
                  value={answer02}
                  onChange={(e) => {
                    setAnswer02(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Answer03</label>
                <input
                  type="text"
                  value={answer03}
                  onChange={(e) => {
                    setAnswer03(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Answer04</label>
                <input
                  type="text"
                  value={answer04}
                  onChange={(e) => {
                    setAnswer04(e.target.value);
                  }}
                />
              </div>

          
           

              <div className="break"></div>
              <button className="addbtn"onClick={submitForm} >Add Question</button>
              <button className="cancelbtn"><Link to='/DisplayQuestion'>Cancel</Link></button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddQuestion;




