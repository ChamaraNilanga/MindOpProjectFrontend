import { Container } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../TopicBox/TopicBox.css';

export default function SubjectBar() {
  return (
    <div>
      <Container>
        <Row className='TopicBox'>
            <Col>
                Multimedia Technology
            </Col>
            <Col>
                File Name: Video Rendering
            </Col>
        </Row>
      </Container>
    </div>
  )
}
