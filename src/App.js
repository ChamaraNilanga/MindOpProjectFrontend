import React from 'react';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 
import ChatStudent from './components/ChatStudent/chat';


function App() {
  return (
    <div className="App">
     <Router>
     <Navigationbar/>
       <Routes>
     {/* <Route path="/" element={<Navigationbar/>}/>    */}
     <Route path="/student" element={<ChatStudent/>}/>
   
     </Routes>
     </Router>
    </div>
  );
}

export default App;
