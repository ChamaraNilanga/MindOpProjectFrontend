import React, { useState } from 'react'
import {Button, ButtonGroup, Container, Row, Stack} from 'react-bootstrap'
import Navbar from '../../components/Navbar/Navbar'
import StatesBar from '../../components/StatesBar/StatesBar'
import '../AddActivity&Resoureses/AddActivity.css'
import FileUploading from '../../components/Fileuploading/FileUploading'
import AddButtonBar from '../../components/AddButtonBar/AddButtonBar'
import AddUrl from '../../components/AddUrl/AddUrl'
import { FcViewDetails , FcAbout , FcFolder , FcGlobe , FcPackage  } from 'react-icons/fc'
import AddAssignment from '../../components/Addassignment/AddAssignment'



export default function AddActivtyResoureses() {

const [Choose, setChoose] = useState();

  return (
    <div>
      <Navbar/>
      <div className='cardbox'>
        <Stack gap={3}>
          <div>
          <StatesBar/>
          </div>
          <div>
      <Container fluid="md">
        
        <Row>
        <ButtonGroup className='bar'>
          <Button className='category' onClick={() => setChoose(1)}><FcPackage size="25"/> Add Assignment</Button>
          <Button className='category' onClick={() => setChoose(2)}><FcGlobe size="25"/> Add URL/Zoom</Button>
          <Button className='category' onClick={() => setChoose(3)}><FcFolder size="25"/> Add File</Button>
          <Button className='category' onClick={() => setChoose(4)}><FcViewDetails size="25"/> Add Feedback Forum</Button>
          <Button className='category' onClick={() => setChoose(5)}><FcAbout size="25"/>Add QuiZ</Button>
        </ButtonGroup> 
        </Row>
        <div>
        <Row className='spacer'>
        </Row>
        </div>
        
        <div>
        <Row className='dragdrop'>
        {Choose ===1 && <AddAssignment/>}
        {Choose ===2 && <AddUrl/>}
        {Choose ===3 && <FileUploading/>}
        {Choose ===4 && <AddUrl/>}
        </Row>
        </div>
      </Container>
      </div>
      </Stack>
      </div>
    </div>
  )
}
