import React from 'react';

import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';


import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import Allcourses from './components/Allcourses/Allcourses';
import Homestudent from './pages/HomeStudent/HomeStudent';
import Addcourseform from './pages/Addcourse/Addcourse';
import ChatStudent from './components/ChatStudent/chat';
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

function App() {
  const role = 's';
  const user='1943';
  return (
    <div className="App">

     <Router>
       <Routes>
       {/* <Route exact path="/" element={<Home/>}/> */}
     {/* <Route path="/" element={<Navigationbar/>}/>    */}
     <Route path="/student" element={<ChatComponent/>}/>
     <Route path="/teacher" element={<ChatTeacher/>}/>
     <Route path="/payment" element={<StripeCheckoutComponent />}/>
     <Route path="/stripepaymentsuccess" element={<StripePaymentSuccess/>}/>
     
     {/* <Route exact path="/Blogs/" element={<MyBlog/>}/> */}
     <Route  path="/Blogs" element={<Post/>}/>
     <Route  path="/Blogs/Blogs" element={<Post/>}/>
     <Route  path="/singlepost/" element={<SinglePost user={user}/>}/>
     <Route  path="/write" element={<Write user={user}/>}/>
     <Route  path="/myblogs/" element={<MyBlogs/>}/>
     <Route  path="Blogs/deleteblog/" element={<DeleteBlog/>}/>
     <Route path="/editblog/" element={<EditBlog/>}/>
     <Route path='/home' element={<Homestudent role={role}/>}/>
     <Route path='/course/addcourse' element={<Addcourseform/>}/>
   
     </Routes>
     </Router>

    </div>

  );
}

export default App;
