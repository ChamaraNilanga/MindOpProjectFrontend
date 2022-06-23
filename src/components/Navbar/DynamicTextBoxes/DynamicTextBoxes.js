import React, { useState } from 'react'
import './DynamicTextBoxes.css';

const DynamicTextBoxes = () => {

    const [formValues, setFormValues] = useState([{ choice: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { choice: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(JSON.stringify(formValues));
    // }

    return (
        <form >
          {formValues.map((element, index) => (
            <div className="formInput" key={index}>
              <label>Answer</label>
              <input type="text"  name="choice" value={element.choice || ""} onChange={e => handleChange(index, e)} />
            
              {
                index ? 
                  <button type="button"  className="removebutton" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="addbtn" type="button" onClick={() => addFormFields()}>Add</button>
              {/* <button className="button submit" type="submit">Submit</button> */}
          </div>
      </form>
    )
}

export default DynamicTextBoxes;