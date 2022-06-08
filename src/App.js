import React from 'react';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import ChatStudent from './components/ChatStudent/chat';
import MyBlog from "./pages/Blog/myblog/MyBlog";
import Post from "./pages/Blog/post/Post";
import SinglePost from "./pages/Blog/singlePost/SinglePost";
import Write from "./pages/Blog/writeblog/Write";
import DeleteBlog from "./pages/Blog/deleteblog/DeleteBlog";



function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
     {/* <Route path="/" element={<Navigationbar/>}/>    */}
     <Route path="/student" element={<ChatStudent/>}/>
     {/* <Route exact path="/Blogs/" element={<MyBlog/>}/> */}
     <Route exact path="Blogs/posts/" element={<Post/>}/>
     <Route path="Blogs/singlepost/" element={<SinglePost/>}/>
     <Route path="Blogs/write/" element={<Write/>}/>
     <Route path="Blogs/myblogs/" element={<MyBlog/>}/>
     <Route path="Blogs/deleteblog/" element={<DeleteBlog/>}/>
   
     </Routes>
     </Router>
    </div>
  );
}

export default App;
