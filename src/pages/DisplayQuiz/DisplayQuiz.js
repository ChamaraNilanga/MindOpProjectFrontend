import React, { useState } from 'react';
import './DisplayQuiz.css';
import axios from 'axios';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

 function DisplayQuiz({id}) {
	
    const [questions,setQuestions] = useState([]);
	const[answers,setAnswers]=useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
     console.log(id);


	function getQuestion(id){
			axios.get(`http://localhost:8070/quizdetails/displayquestionsbelongstoaquiz/${id}`)
			.then((res)=>{
				console.log(res.data);
			setQuestions(res.data);
			}).catch((err)=>{
				console.log(err);
			})
		} 
		
	function getAnswers (){
		axios.get('http://localhost:8070/quizdetails/displaycorrectanswers').then((res)=>{
			console.log('Correct Answers: ',res.data);
			setAnswers(res.data);
		}).catch((err)=>{
			console.log(err);
		})
	}
		useEffect(()=>{
			
			getQuestion(106);
			getAnswers()
		},[])
	



	const handleAnswerOptionClick =(answer) => {
        console.log('Answer: ',answer);
		for(let i=0;i<answers.length;i++){
			if(answers[i].qid == currentQuestion){
				if(answers[i].correctanswer === answer){
					setScore(score + 1);
				}
			}
		}
	   console.log('Answer Checked');
	   console.log('Score: ',score);

		// if (true) {
		// 	setScore(score + 1);
		// }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		
		<div className="contentoutborder">
		<div className="content">
		<div className='quizcontainer'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='questionsec'>
						<div className='questioncount'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questiontxt'>{questions[currentQuestion]?.questiontext}</div>
					</div>
					<div className='answersection'>
						{/* {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="answeronclickbtn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))} */}
					<button className="answeronclickbtn" onClick={() => handleAnswerOptionClick(questions[currentQuestion].answer01)}>{questions[currentQuestion]?.answer01}</button>
					<button className="answeronclickbtn" onClick={() => handleAnswerOptionClick(questions[currentQuestion].answer02)}>{questions[currentQuestion]?.answer02}</button>
					<button className="answeronclickbtn" onClick={() => handleAnswerOptionClick(questions[currentQuestion].answer03)}>{questions[currentQuestion]?.answer03}</button>
					<button className="answeronclickbtn" onClick={() => handleAnswerOptionClick(questions[currentQuestion].answer04)}>{questions[currentQuestion]?.answer04}</button>

					</div>
				</>
			)}
		</div>
		<button className="bactocrcquiz"><Link to='/CourseContent'>Back to course</Link></button> </div>
		</div>
	);
}

 
	export default DisplayQuiz;







// const questions =[{},{},{},];

// const questions = [
// 	{
// 		questionText: 'What is the capital of France?',
// 		answerOptions: [
// 			{ answerText: 'New York', isCorrect: false },
// 			{ answerText: 'London', isCorrect: false },
// 			{ answerText: 'Paris', isCorrect: true },
// 			{ answerText: 'Dublin', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'Who is CEO of Tesla?',
// 		answerOptions: [
// 			{ answerText: 'Jeff Bezos', isCorrect: false },
// 			{ answerText: 'Elon Musk', isCorrect: true },
// 			{ answerText: 'Bill Gates', isCorrect: false },
// 			{ answerText: 'Tony Stark', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'The iPhone was created by which company?',
// 		answerOptions: [
// 			{ answerText: 'Apple', isCorrect: true },
// 			{ answerText: 'Intel', isCorrect: false },
// 			{ answerText: 'Amazon', isCorrect: false },
// 			{ answerText: 'Microsoft', isCorrect: false },
// 		],
// 	},
// 	{
// 		questionText: 'How many Harry Potter books are there?',
// 		answerOptions: [
// 			{ answerText: '1', isCorrect: false },
// 			{ answerText: '4', isCorrect: false },
// 			{ answerText: '6', isCorrect: false },
// 			{ answerText: '7', isCorrect: true },
// 		],
// 	},
// ];