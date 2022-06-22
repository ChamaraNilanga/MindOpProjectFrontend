import { DatePicker, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


export default function AddAssignment() {
  return (
    <div>
       <Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='feild'>Assignment Name</Form.Label>
            <Form.Control type="Name" />
    </Form.Group>
    
    <Form.Group className="mb-3">
    <Row>
      <Col xs={6}><Form.Label className='feild'>Due Date </Form.Label>
            <Form.Control type="Date"/></Col>
      <Col xs={6}><Form.Label className='feild'>Start Time</Form.Label>
            <Form.Control type="Time"/></Col>
            <Col xs={6}><Form.Label className='feild'>Completion Date</Form.Label>
            <Form.Control type="Date"/></Col>
      <Col xs={6}><Form.Label className='feild'>End Time</Form.Label>
            <Form.Control type="time"/></Col>
            
    </Row>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='feild'>Description</Form.Label>
            <Form.Control as="textarea" />
    </Form.Group> 
                
    <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className='feild'>Choose Your File</Form.Label>
            <Form.Control type="file" />
    </Form.Group>

    <Row className='spacer'>
                    <Button type="submit" size="lg" className='button'>Submit</Button>
                </Row>
      </Form>
    
    </div>
  )
}
