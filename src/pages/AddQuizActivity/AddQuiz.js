import "./AddQuiz.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const AddQuiz = ({cid}) => {
  const [quizID, setQuizID] = useState("");
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [timelimit, setTimeLimit] = useState("");
  const [grade, setGrade] = useState("");
  const [navimethod,setNavimethod] = useState("");
  const [layout,setLayout] = useState("");
  const [availability,setAvailability] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8070/quizdetails/createquizactivity/${cid}`,
        {
            quizID:quizID,
            quizname:quizName,
            quizdes:description,
            timelimit:timelimit,
            grade:grade,
            navimethod:navimethod,
            layout:layout,
            availability:availability
           
        }
      )
      .then(() => {
        console.log('Success')
        
        alert('Quiz Activity Created!')
      })
  };

  return (
    <div className="new">
      
      <div className="newContainer">
      <Navbar />
        <div className="top">
          <h1>Add Quiz Activity</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
            <div className="formInput">
                <label>Quiz ID</label>
                <input
                  type="text"
                  value={quizID}
                  onChange={(e) => {
                    setQuizID(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Quiz Name</label>
                <input
                  type="text"
                  value={quizName}
                  onChange={(e) => {
                    setQuizName(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Display description on the course page
                    </label>
                  </div> */}
              <div className="formInput">
                <label>Time Limit (00:00:00)</label>
                <input
                  type="text"
                  value={timelimit}
                  onChange={(e) => {
                    setTimeLimit(e.target.value);
                  }}
                />
              </div>
              <div className="formInput">
                <label>Grade</label>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => {
                    setGrade(e.target.value);
                  }}
                />
              </div>

              <div className="formInput"> <label >
          Navigation method:
          <select className="option" value={navimethod} onChange={(e)=>{
                        setNavimethod(e.target.value);
          }}>
            <option value="navigation"> Free Navigation</option>
            <option value="sequential">Sequential</option>
           
          </select>
        </label></div>

        <div className="formInput"> <label >
        Layout:
          <select className="option" value={layout} onChange={(e)=>{
                        setLayout(e.target.value);
          }}>
            <option value="all in one page">All in one page</option>
            <option value="question per page">Question per page</option>
            <option value="5 question per page">Five question per page</option>
           
          </select>
        </label></div>

        <div className="formInput"> <label >
        Availability:
          <select className="option" value={availability} onChange={(e)=>{
                        setAvailability(e.target.value);
          }}>
             <option value="show on course page">Show on course page</option>
            <option value="hidden from students">Hidden from students</option>
           
          </select>
        </label></div>
        
              <div className='navimethod'>
              <navimethod /></div>
              <div className="break"></div>
              <button onClick={submitForm} >Add Quiz</button>
              <button className="cancelbtn"><Link to='/DisplayCategory'>Cancel</Link></button> 
              {/* <button className="cancelbtn"><Link to='/DisplayCategory'>Cancel</Link></button> 
              <button className="cancelbtn"><Link to='/DisplayCategory'>Cancel</Link></button>  */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddQuiz;