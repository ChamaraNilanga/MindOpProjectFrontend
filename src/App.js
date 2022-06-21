// import React ,{useState}from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AssignmentDetails from './pages/Assignment/Assignment_T/AssignmentDetails';
import CreateAssignment from './pages/Assignment/Assignment_T/CreateAssignment';
import UpdateAssignment from './pages/Assignment/Assignment_T/UpdateAssignment';
import ForgetPasswordPage from './pages/login/forgetpassword.js'
import HomePage from './pages/login/homepage.js'
import Loginpage from './pages/login/loginpage';
import Sendmail from './pages/login/Sendemail';
import Sendmailw from './pages/login/Sendmailw';
import Createusers from './pages/UserManagement/Createusers';
import Deleteusers from './pages/UserManagement/Deleteusers';
import Updateuser from './pages/UserManagement/Updateuser';


function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
        <Route path="/" element={ <Loginpage/>} />
        <Route path="/home" element={< HomePage />} />
        <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
        <Route path="/createassignment" element={ <CreateAssignment/> } />
        <Route path="/assignmentdetails" element={ <AssignmentDetails/> } />
        <Route path="/sendemail" element={ <Sendmail/> } />
        <Route path="/sendmailw" element={ <Sendmailw/> } />
        <Route path="/createusers" element={ <Createusers /> } />
        <Route path="/updateuser" element={ <Updateuser /> } />
        <Route path="/updateassignment" element={ <UpdateAssignment /> } />
        <Route path="/deleteuser" element={ <Deleteusers /> } />

      </Routes>
     </Router>
    </div>
  );
}

export default App;
