import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Navigationbar from "./components/Navbar/Navbar";

import ForgetPasswordPage from './pages/forgetpassword.js'
import HomePage from './pages/homepage.js'
import SignInPage from './pages/SignInPage';



function App() {
  const [loggedIn,setLoggedIn]=useState(false)
  return (
    <div className="App">
     <Router>
       {
         loggedIn?(<>
         <Navigationbar/>
                  <Routes>
                    <Route path="/home" element={< HomePage />} />
                  </Routes>
                 
         </>):(<>
          <Routes>
          <Route path="/" element={ <SignInPage/>} />
          <Route path="/forget-password" element={ <ForgetPasswordPage/> } />

          </Routes>
         
         </>)

       }
     </Router>
    </div>
  );
}

export default App;
