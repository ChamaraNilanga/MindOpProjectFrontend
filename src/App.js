import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import AddCategory from "./pages/AddCategory/AddCategory";
import AddQuiz from './pages/AddQuizActivity/AddQuiz';
import DisplayCategory from './pages/DisplayCategory/DisplayCategory'
import AddSubCategory from './pages/AddSubCategory/AddSubCategory';
import DisplayQuiz from './pages/DisplayQuiz/DisplayQuiz';
import AddQuestion from './pages/AddQuestion/AddQuestion';
import SelectQuestionType from './pages/SelectQuestionType/SelectQuestionType';
import DisplayQuestion from './pages/DisplayQuestion/DisplayQuestion';
import UpdateQuestion from './pages/UpdateQuestion/UpdateQuestion';
import QuizReports from './pages/QuizReports/QuizReports';
import PreviewQuestion from './pages/PreviewQuestion/PreviewQuestion';
import EditCategory from './pages/EditCategory/EditCategory';
import GradeReport from './pages/GradeReport/GradeReport';
import ResponsesReport from './pages/ResponsesReport/ResponsesReport';
import StatisticsReport from './pages/StatisticsReport/StatisticsReport';
import AttemptReport from './pages/AttemptReport/AttemptReport';
import QuizActivityStartTeacher from './components/QuizActivityStartTeacher/QuizActivityStartTeacher';
import QuizActivityStartStudent from './components/QuizActivityStartStudent/QuizActivityStartStudent';





function App() {
  const user='194114T'

  return (
    <div className="App">
      

      <Router>
     
      <Routes>
     
     
      <Route path="/AddCategory" element={<AddCategory />} />
      <Route path="/AddQuiz" element={<AddQuiz cid={1} />} />
      <Route path="/DisplayCategory" element={<DisplayCategory />} />
      <Route path="/AddSubCategory" element={<AddSubCategory id={'IN6110'} />} />
      <Route path="/DisplayQuiz" element={<DisplayQuiz id={'106'}/>} />
      <Route path="/AddQuestion" element={<AddQuestion id={'mcq'}/>} />
      <Route path='/selectquestiontype' element={<SelectQuestionType/>}/>
      <Route path="/DisplayQuestion" element={<DisplayQuestion/>}/>
      <Route path="/UpdateQuestion" element={<UpdateQuestion/>}/>
      <Route path="/QuizReports" element={<QuizReports/>}/>
      <Route path="/PreviewQuestion" element={<PreviewQuestion/>}/>
      <Route path="/EditCategory" element={<EditCategory/>}/>
      <Route path="/GradeReport" element={<GradeReport/>}/>
      <Route path="/ResponsesReport" element={<ResponsesReport/>}/>
      <Route path="/StatisticsReport" element={<StatisticsReport/>}/>
      <Route path="/AttemptReport" element={<AttemptReport user={user}/>}/>
      <Route path="/QuizActivityStartTeacher" element={<QuizActivityStartTeacher/>}/>
      <Route path="/QuizActivityStartStudent" element={<QuizActivityStartStudent/>}/>
      
      
      
      </Routes>
      </Router> 
      

    </div>
  );
}
export default App;





