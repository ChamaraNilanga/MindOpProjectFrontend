import "./write.css"
import TopBar from "../topbar/TopBar";

export default function Write() {
    
  return (
      
    <div className="write">
        <TopBar/>
      <img 
      className="writeImg"
      src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      alt=""/>
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput"/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." 
            type="text"
            className="writeInput writeText">
            </textarea>
        </div>
        <div className="writeSubmit">Publish</div>
    </form>
    </div>
  )
}
