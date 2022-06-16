import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import Allcourses from './components/Allcourses/Allcourses';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';
import Enrollmentreqdash from './components/EnrollmentRequestDashboard/Enrollmentrequestdashboard';
import AdminDash from './components/AdminDashboard/Admindash';
import AllcoursesDelUpdlist from './components/AllcoursesDeleteUpdateList/Allcoursesdelupdlist';
import Courseupdatedeletelist from './pages/CoursesUpdateDeleteList/Courseupddellist';


function App() {
  const role = 's';
  const id='194075X';
  return (
    <div className="App">
      
      <Router>
       <Routes>
          <Route path='/home' element={<Homestudent role={role} id={id}/>}/>
          <Route path='/course/addcourse' element={<Addcourseform/>}/>
          <Route path='/course/list' element={<Courseupdatedeletelist/>}/>
        </Routes>
     </Router> 
    
    </div>

  );
}

export default App;
