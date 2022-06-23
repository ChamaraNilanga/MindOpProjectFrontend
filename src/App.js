
import React ,{useEffect, useState}from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';

import CourseContent from './pages/CourseContent/CourseContent';
import TopicBox from './components/TopicBox/TopicBox';
import ViewVideos from './pages/ViewVideos/ViewVideos';
import AddActivtyResoureses from './pages/AddActivity&Resoureses/AddActivtyResoureses';

import AllcoursesDelUpdlist from './components/AllcoursesDeleteUpdateList/Allcoursesdelupdlist';
import Courseupdatedeletelist from './pages/CoursesUpdateDeleteList/Courseupddellist';
import AddSubmission from './pages/Assignment/Assignment_S/AddSubmission';
import AttemptAssignment from './pages/Assignment/Assignment_S/AttemptAssignment';
import AssignmentDetails from "./pages/Assignment/Assignment_T/AssignmentDetails";
import CreateAssignment from "./pages/Assignment/Assignment_T/CreateAssignment";
import UpdateAssignment from "./pages/Assignment/Assignment_T/UpdateAssignment";
import ForgetPasswordPage from "./pages/login/forgetpassword.js";
import HomePage from "./pages/login/homepage.js";
import Loginpage from "./pages/login/loginpage";
import Sendmail from "./pages/login/Sendemail";
import Sendmailw from "./pages/login/Sendmailw";

import Createusers from "./pages/UserManagement/Createusers";
import Deleteusers from "./pages/UserManagement/Deleteusers";
import Updateuser from "./pages/UserManagement/Updateuser";

import Searchbar from './components/SearchBar/Searchbar';
import Singlecoursedetails from './components/SingleCourseDetails/Singlecoursedetails';
import Enrollreqlist from './components/EnrollmentRequests/Enrollmentreqlist';
import Conductreqlist from './components/ConductingRequests/Conductingreqlist';

import UpdateCourseDetails from './pages/UpdateCourseDetails/Updatecoursedetails';
import SingleCoursePage from './pages/SingleCoursePage/Singlecoursepage';
import Enrollmentrequestlist from './pages/EnrollmentRequestsList/Enrollmentrequestlist';
import Stuteacherallcourses from './pages/StudentTeacherAllcourses/Stuteacherallcourses';
import Assignteacherformodule from './pages/AssignTeacherForModule/Assignteacherformodule';
import MyBlogs from "./pages/Blog/myblog/MyBlog";
import Post from "./pages/Blog/post/Post";
import SinglePost from "./pages/Blog/singlePost/SinglePost";
import Write from "./pages/Blog/writeblog/Write";
import DeleteBlog from "./pages/Blog/deleteblog/DeleteBlog";

import StripeCheckoutComponent from './pages/Payment/StripeCheckoutComponent';
import EditBlog from "./pages/Blog/editblog/EditBlog";
import ChatComponent from './components/ChatStudent/chat';
import ChatTeacher from "./components/ChatTeacher/chatTeacher";
import StripePaymentSuccess from './pages/Payment/StripePaymentSuccess';


import Addforumcategory from './components/AddForumCategory/Addforumcategory';
import Forumcategory from './pages/FormsCategory/Formscategory';
import Addcategory from './pages/AddCategory/Addcategory';
import Questionlistpage from './pages/QuestionListPage/Questionlistpage';
import Singlequestionforumpage from './pages/SingleQuestionForumPage/Singlequestionforumpage';
import Addforumquestionpage from './pages/AddForumQuestionPage/Addforumquestionpage';
import Forummylist from './pages/ForumMylist/Forummylist';
import Addforumcomments from './pages/AddForumComment/Addforumcomment';
import Addforumsubcomment from './pages/AddForumSubComment/Addforumsubcomment';




function App() {
  // const role = 'a';
  // const id='194075X';
  // const mod=40;
  const [role,setRole]=useState('')
  const [admin,setAdmin]=useState('')
  const [student,setStudent]=useState('')
  const [teacher,setTeacher]=useState('')
  const [id,setId]=useState('')

 const roleassign =() =>{
  if (localStorage.getItem('teacher') == true ) {
    console.log("user")
  }else{
    console.log("net user");
  }
   console.log(localStorage.getItem('admin'));
  {localStorage.getItem('admin') == true ? (
    setRole('a')
   ) : localStorage.getItem('teacher') == true ? (
     setRole('c')
   ) : (
     setRole('s')
   ) }
 }

useEffect(()=>{
  setAdmin(localStorage.getItem('admin'));
  setStudent(localStorage.getItem('student'));
  setTeacher(localStorage.getItem('teacher'));
  setId(localStorage.getItem('userid'));
  if(localStorage.getItem('admin') == true ){
    setRole('a')
  }else if(localStorage.getItem('teacher') == true){
    setRole('c')
  }else{
    setRole('s')
  }
},[])

  return (
    <div className="App">
      
      <Router>
       <Routes>
    
     <Route path="/" element={<Loginpage />} />
         
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/createassignment" element={<CreateAssignment />} />
          <Route path="/assignmentdetails" element={<AssignmentDetails />} />
          <Route path="/sendemail" element={<Sendmail />} />
          <Route path="/sendmailw" element={<Sendmailw />} />
          <Route path="/createusers" element={<Createusers />} />
          <Route path="/updateuser" element={<Updateuser />} />
          <Route path="/updateassignment" element={<UpdateAssignment />} />
          <Route path="/deleteuser" element={<Deleteusers />} />
          <Route path="/attemptassignment" element={<AttemptAssignment />} />
          <Route path="/addsubmission" element={<AddSubmission />} />

       {/* <Route exact path="/" element={<Home/>}/> */}
     {/* <Route path="/" element={<Navigationbar/>}/>    */}
     <Route path="/student" element={<ChatComponent/>}/>
     <Route path="/teacher" element={<ChatTeacher/>}/>
     <Route path="/payment" element={<StripeCheckoutComponent />}/>
     <Route path="/stripepaymentsuccess" element={<StripePaymentSuccess/>}/>
     
     {/* <Route exact path="/Blogs/" element={<MyBlog/>}/> */}
     
     
     <Route path="/editblog/" element={<EditBlog/>}/>
     <Route path='/home' element={<Homestudent role={role}/>}/>
     <Route path='/course/addcourse' element={<Addcourseform/>}/>

          <Route path='/home' element={<Homestudent role={role} id={id}/>}/>
          <Route path='/course/addcourse' element={<Addcourseform/>}/>

          <Route path='/coursecontent'element={<CourseContent/>}/>
          <Route path='/viewvideos'element={<ViewVideos/>}/>
          <Route path='/addactivityresourses'element={<AddActivtyResoureses/>}/>

          <Route path='/course/list' element={<Courseupdatedeletelist/>}/>
          <Route path='/updatecourse' element={<UpdateCourseDetails/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage role={role} user={id}/>}/>
          <Route path='/enrollmentrequests' element={<Enrollmentrequestlist  userid={'194101A'} />}/>
          <Route path='/courseswithdetails' element={<Stuteacherallcourses role={role}/>}/>
          <Route path='/assignteacher' element={<Assignteacherformodule user={id}/>}/>
          <Route path='/singlecourse' element={<SingleCoursePage/>}/>
         <Route  path="/Blogs" element={<Post/>}/>
         <Route  path="/Blogs/Blogs" element={<Post/>}/>
         <Route  path="/singlepost" element={<SinglePost/>}/>
         <Route  path="/write" element={<Write/>}/>
         <Route  path="/myblogs/" element={<MyBlogs/>}/>
         <Route  path="Blogs/deleteblog/" element={<DeleteBlog/>}/>
         <Route path='/forums/addcategory' element={<Addcategory/>}/>
         <Route path='/forums' element={<Forumcategory role={role}/>}/>
         <Route path='/forum/questions' element={<Questionlistpage user={id}/>}/>
         <Route path="/forum/single" element={<Singlequestionforumpage user={id}/>}/>
         <Route path="/forum/addforum" element={<Addforumquestionpage/>}/>
         <Route path="/forum/mylist" element={<Forummylist user={id}/>}/>
         <Route path="/forum/reply" element={<Addforumcomments user={id}/>}/>
         <Route path='/forum/subreply' element={<Addforumsubcomment user={id}/>}/>
         


        </Routes>
     </Router> 

   


    </div>

  );
}

export default App;
