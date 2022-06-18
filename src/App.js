import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';
import AllcoursesDelUpdlist from './components/AllcoursesDeleteUpdateList/Allcoursesdelupdlist';
import Courseupdatedeletelist from './pages/CoursesUpdateDeleteList/Courseupddellist';
import UpdateCourseDetails from './pages/UpdateCourseDetails/Updatecoursedetails';
import SingleCoursePage from './pages/SingleCoursePage/Singlecoursepage';
import Enrollmentrequestlist from './pages/EnrollmentRequestsList/Enrollmentrequestlist';
import Stuteacherallcourses from './pages/StudentTeacherAllcourses/Stuteacherallcourses';
import Assignteacherformodule from './pages/AssignTeacherForModule/Assignteacherformodule';
import ChatStudent from './components/ChatStudent/chat';
import MyBlogs from "./pages/Blog/myblog/MyBlog";
import Post from "./pages/Blog/post/Post";
import SinglePost from "./pages/Blog/singlePost/SinglePost";
import Write from "./pages/Blog/writeblog/Write";
import DeleteBlog from "./pages/Blog/deleteblog/DeleteBlog";



function App() {
  const role = 'a';
  const id='194071F';
  const mod=40;
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route path='/home' element={<Homestudent role={role} id={id}/>}/>
          <Route path='/course/addcourse' element={<Addcourseform/>}/>
          <Route path='/course/list' element={<Courseupdatedeletelist/>}/>
          <Route path='/updatecourse' element={<UpdateCourseDetails/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage role={role} user={id}/>}/>
          <Route path='/enrollmentrequests' element={<Enrollmentrequestlist id={mod} userid={'194101A'} />}/>
          <Route path='/courseswithdetails' element={<Stuteacherallcourses role={role}/>}/>
          <Route path='/assignteacher' element={<Assignteacherformodule user={id}/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage/>}/>
         {/* <Route path="/" element={<Navigationbar/>}/>    */}
         <Route path="/student" element={<ChatStudent/>}/>
         {/* <Route exact path="/Blogs/" element={<MyBlog/>}/> */}
         <Route  path="/Blogs" element={<Post/>}/>
         <Route  path="/Blogs/Blogs" element={<Post/>}/>
         <Route  path="/singlepost" element={<SinglePost/>}/>
         <Route  path="/write" element={<Write/>}/>
         <Route  path="/myblogs/" element={<MyBlogs/>}/>
         <Route  path="Blogs/deleteblog/" element={<DeleteBlog/>}/>
         <Route path='/home' element={<Homestudent role={role}/>}/>
         <Route path='/course/addcourse' element={<Addcourseform/>}/>
        </Routes>
     </Router> 
   

    </div>

  );
}

export default App;
