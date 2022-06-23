import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'

export default function AddUrl() {
  return (
    <div>
      <Form className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='feild'>URL</Form.Label>
            <Form.Control type="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='feild'>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
    </Form.Group>
                <Row className='spacer'>
                    <Button type="submit" size="lg" className='button'>Submit</Button>
                </Row>
      </Form>
    </div>
  )
}
