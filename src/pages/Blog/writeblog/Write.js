import "./write.css"
import TopBar from "../topbar/TopBar";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar"


function Write({user}) {
  
  const [blogtitle, setTitle] = useState('')
  const [body, setBlogbody] = useState('')
console.log(blogtitle)
console.log(body)


//   const addblog =async ({user}) => {
//    await axios.post(`http://localhost:8052/blog/addblog/${user}`,
       
// {
//         blogtitle:title,
//         body:blogbody,
//       })
//       .then(() => {
//         console.log(title)
// console.log(blogbody)
//         console.log('Success')
        
//         alert('added successed!')
//       }
//       )
      
//   }



async function addQuestion({image, blogtitle,body,user}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("blogtitle", blogtitle)
  formData.append("body", body)

console.log(user);
  const result = await axios.post(`http://localhost:8052/blog/addblog/${user}`, formData, { headers: {'Content-Type': 'multipart/form-data'}})

  return result.data
}




const [image , setImage] = useState('')

const submit = async event => {
  // event.preventDefault()
  const result = await addQuestion({image: image, blogtitle,body,user})
  setImage([result.image, ...image])
  if(result){
      console.log(result)
      alert(result)
  }else{
      alert("Couldn't accept question")
  }
}
const fileSelected = event => {
  const file = event.target.files[0]
      setImage(file);
  }





  return (
    <div>
    <Navbar/>
      <div className="postswrite">
        
        <div>
        <TopBar/>
        </div>
         
    <div className="writes">
       
      {/* <img 
      className="writeImg"
      src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
      alt=""/> */}
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
           
            </label>

            <div class="form-group">
                    <input type="file" onChange={fileSelected}
                        className="formcontrolblog"  accept="image/*"/>
                </div>

            
            <input type="text" 
            onChange={(event) => {
              setTitle(event.target.value)
            }}
            placeholder="   Title" 
            className="writeInput" 
           />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." 
            type="text"
            onChange={(event) => {
              setBlogbody(event.target.value)
            }}
            className="writeInput writeText">
            </textarea>
            
        </div>
       
        <button type="submit" className="writeSubmits" onClick={submit}
        >Publish</button>
       
        
    </form>
    </div>
    </div>
    </div>
  )
}

export default  Write;