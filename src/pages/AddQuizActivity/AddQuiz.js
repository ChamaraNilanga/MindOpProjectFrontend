import "./AddQuiz.css";
import { useState } from "react";
//import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const AddQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [description, setDescription] = useState("");
  const [timelimit, setTimeLimit] = useState("");
  const [grade, setGrade] = useState("");
  

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8070/quizdetails/createquizactivity/002&1",
        {
            quizname:quizName,
            quizdes:description,
            timelimit:timelimit,
            grade:grade,
            navimethod:this.state.value,
            layout:this.state.value,
            availability:this.state.value,
           
        },
        {
          withCredentials: true,
          credentials: "include",
        }
      )
      .then((res) => {
        alert(res);
        console.log(res);
      });
  };

  return (
    <div className="new">
      
      <div className="newContainer">
       
        <div className="top">
          <h1>Add Quiz Activity</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
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
              <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                      Display description on the course page
                    </label>
                  </div>
              <div className="formInput">
                <label>Time Limit (minitues)</label>
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
              <label>
          Navigation method:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="navigation"> Free Navigation</option>
            <option value="sequential">Sequential</option>
           
          </select>
        </label>
        <label>
          Layout:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="all in one page">All in one page</option>
            <option value="question per page">Question per page</option>
            <option value="5 question per page">Five question per page</option>
          </select>
        </label>
        <label>
          Availability:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="show on course page">Show on course page</option>
            <option value="hidden from students">Hidden from students</option>
            
          </select>
        </label>
             
              
              <div className="break"></div>
              <button onClick={submitForm}>Send</button>
              <div classname="cancel-btn">
              <button >Save and return to course page</button></div>
              <div classname="cancel-btn">
              <button >Save and display</button></div>
              <div classname="cancel-btn">
              <button >Cancel</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AddQuiz;