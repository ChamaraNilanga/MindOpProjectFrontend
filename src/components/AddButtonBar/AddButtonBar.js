import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { FcViewDetails , FcAbout , FcFolder , FcGlobe , FcPackage  } from 'react-icons/fc'
import '../AddButtonBar/AddButtonBar.css'
import AddUrl from '../AddUrl/AddUrl'


export default function AddButtonBar() {
  const handleclick = (event) =>{

    const com = (event.target.value);
}
const [Choose, setChoose] = useState();
  return (
    <div>
        
      {Choose ? <AddUrl/>:null}
    </div> 
  )
}
