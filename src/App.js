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
import Searchbar from './components/SearchBar/Searchbar';
import Singlecoursedetails from './components/SingleCourseDetails/Singlecoursedetails';
import Enrollreqlist from './components/EnrollmentRequests/Enrollmentreqlist';
import Conductreqlist from './components/ConductingRequests/Conductingreqlist';
import Footer from './components/Footer/Footer';
import UpdateCourseDetails from './pages/UpdateCourseDetails/Updatecoursedetails';
import SingleCoursePage from './pages/SingleCoursePage/Singlecoursepage';
import ChatStudent from './components/ChatStudent/chat';
import MyBlogs from "./pages/Blog/myblog/MyBlog";
import Post from "./pages/Blog/post/Post";
import SinglePost from "./pages/Blog/singlePost/SinglePost";
import Write from "./pages/Blog/writeblog/Write";
import DeleteBlog from "./pages/Blog/deleteblog/DeleteBlog";



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
          <Route path='/updatecourse' element={<UpdateCourseDetails/>}/>
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
