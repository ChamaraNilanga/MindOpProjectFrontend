import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar"; 

function App() {
  return (
    <div className="App">
     <Router>
     <Navigationbar/>
     </Router>
    </div>
  );
}

export default App;
