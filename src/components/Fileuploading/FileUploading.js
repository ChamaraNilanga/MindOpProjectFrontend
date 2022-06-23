import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import '../Fileuploading/FileUploading.css'


export default function FileUploading() {
  return (
    <div>
      <Form className='form'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='feild'>File Name</Form.Label>
            <Form.Control type="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='feild'>Add a Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
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
