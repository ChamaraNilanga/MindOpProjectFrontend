import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import Allcourses from './components/Allcourses/Allcourses';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './components/AddCourseForm/Addcourseform';


function App() {
  const role = 's';
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/home' element={<Homestudent role={role}/>}/>
        </Routes>
     </Router> 
    
    </div>

  );
}

export default App;
