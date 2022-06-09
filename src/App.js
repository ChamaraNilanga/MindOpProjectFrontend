import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AssignmentDetails from './pages/Assignment/AssignmentDetails';
import CreateAssignment from './pages/Assignment/CreateAssignment';
import ForgetPasswordPage from './pages/login/forgetpassword.js'
import HomePage from './pages/login/homepage.js'
import SignInPage from './pages/login/SignInPage.js';
import Navigationbar from "./components/Navbar/Navbar"; 
import Allcourses from './components/Allcourses/Allcourses';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';


function App() {
  const role = 's';
  return (
    <div className="App">

      
      <Router>
        <Routes>
          <Route path='/home' element={<Homestudent role={role}/>}/>
          <Route path="/" element={ <SignInPage/>} />
          <Route path="/home" element={< HomePage />} />
          <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
          <Route path="/createassignment" element={ <CreateAssignment/> } />
          <Route path="/assignmentdetails" element={ <AssignmentDetails/> } />
          <Route path='/course/addcourse' element={<Addcourseform/>}/>
        </Routes>
     </Router> 
    

    </div>

  );
}

export default App;
