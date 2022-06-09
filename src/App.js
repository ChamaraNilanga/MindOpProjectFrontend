import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AssignmentDetails from './pages/Assignment/AssignmentDetails';
import CreateAssignment from './pages/Assignment/CreateAssignment';
import ForgetPasswordPage from './pages/login/forgetpassword.js'
import HomePage from './pages/login/homepage.js'
import SignInPage from './pages/login/SignInPage.js';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
        <Route path="/" element={ <SignInPage/>} />
        <Route path="/home" element={< HomePage />} />
        <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
        <Route path="/createassignment" element={ <CreateAssignment/> } />
        <Route path="/assignmentdetails" element={ <AssignmentDetails/> } />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
