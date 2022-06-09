import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCategory from "./pages/AddCategory/AddCategory";
import DisplayCategory from "./pages/DisplayCategory/DisplayCategory";
//import AddQuiz from './pages/AddQuizActivity/AddQuiz';


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/">
      

      <Route path="AddCategory">
      <Route path="AddCategory" element={<AddCategory />} />
      </Route>

      <Route path="DispalyCategory">
      <Route path="DispalyCategory" element={<DisplayCategory />} />
      </Route>

      
     
      
        
        

        </Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}
export default App;





