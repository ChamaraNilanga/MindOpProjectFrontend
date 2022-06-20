import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import Allcourses from './components/Allcourses/Allcourses';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';
import CourseContent from './pages/CourseContent/CourseContent';
import TopicBox from './components/TopicBox/TopicBox';
import ViewVideos from './pages/ViewVideos/ViewVideos';
import AddActivtyResoureses from './pages/AddActivity&Resoureses/AddActivtyResoureses';

function App() {
  const role = 's';
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/home' element={<Homestudent role={role}/>}/>
          <Route path='/course/addcourse' element={<Addcourseform/>}/>
          <Route path='/coursecontent'element={<CourseContent/>}/>
          <Route path='/viewvideos'element={<ViewVideos/>}/>
          <Route path='/addactivityresourses'element={<AddActivtyResoureses/>}/>
        </Routes>
     </Router> 
    
    </div>

  );
}

export default App;
