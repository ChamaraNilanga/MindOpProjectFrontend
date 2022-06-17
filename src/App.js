import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddCategory from "./pages/AddCategory/AddCategory";
//import DisplayCategory from "./pages/DisplayCategory/DisplayCategory";
import AddQuiz from './pages/AddQuizActivity/AddQuiz';



function App() {
 

  return (
    <div className="App">
      

      <Router>
     
      <Routes>
     
     
      <Route path="/AddCategory" element={<AddCategory />} />
      <Route path="/AddQuiz" element={<AddQuiz />} />
 
   
      </Routes>
      </Router> 
      

    </div>
  );
}
export default App;





