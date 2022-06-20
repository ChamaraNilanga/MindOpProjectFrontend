import React from 'react';
import Navbar from '../Navbar/Navbar';
import './TopicBox.css'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';

import { MdModeEditOutline } from 'react-icons/md';
import { AiTwotoneSetting } from 'react-icons/ai';
import { BiRename } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BiHide } from 'react-icons/bi';
import { HiOutlineDuplicate } from 'react-icons/hi';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThreeDotActions from '../ThreeDotActions/ThreeDotActions';

//const decoratedOnClick = useAccordionButton(eventKey, onClick);

export default function TopicBox() {
  return (
    <div>
        <header><Navbar/></header>
        <Container>
            <Row className='TopicBox'>
              <Col xs={11}>
              Information Technology
              </Col>
              <Col xs={1} >
              
              <Dropdown  as={ButtonGroup}>
                  <Dropdown.Toggle className='dropdown-toggle' id="dropdown-split-basic"><AiTwotoneSetting/></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><BiRename/> Rename</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><RiDeleteBin6Fill/>  Delete</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><BiHide/> hide</Dropdown.Item>
                    <Dropdown.Item href="#/action-1"><HiOutlineDuplicate/> duplicate</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              </Row>
              </Container>
                  
          <Container>
            <Row className='row'>
              
                <Accordion>
                <Accordion.Item eventKey="0">
                
                <Accordion.Header>
                <Col xs={10} className='col'>
                Computer Organization
                </Col>
                  <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                 </Accordion.Header> 
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><Col xs={10} className='col'>
                Database Management System
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><Col xs={10} className='col'>
                Multimedia Technology
                </Col>
                  <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><Col xs={10} className='col'>
                Software Engineering Methods
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                
                <Accordion.Header>
                <Col xs={10} className='col'>
                Computer Organization
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                 </Accordion.Header> 
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header><Col xs={10} className='col'>
                Database Management System
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header><Col xs={10} className='col'>
                Multimedia Technology
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header><Col xs={10} className='col'>
                Software Engineering Methods
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                
                <Accordion.Header>
                <Col xs={10} className='col'>
                Computer Organization
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                 </Accordion.Header> 
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header><Col xs={10} className='col'>
                Database Management System
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header><Col xs={10} className='col'>
                Multimedia Technology
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header><Col xs={10} className='col'>
                Software Engineering Methods
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                
                <Accordion.Header>
                <Col xs={10} className='col'>
                Computer Organization
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                 </Accordion.Header> 
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header><Col xs={10} className='col'>
                Database Management System
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header><Col xs={10} className='col'>
                Multimedia Technology
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="15">
                <Accordion.Header><Col xs={10} className='col'>
                Software Engineering Methods
                </Col>
                <Col xs={1}>
                  <Stack direction="horizontal" gap={3}>
                  <div><Button size="sm" variant="secondary"><MdModeEditOutline/></Button></div>
                  <div><ThreeDotActions/></div>
                  </Stack>
                  </Col>
                  </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
              
              </Accordion>

              </Row>
            </Container>
 
                </div>
  )
}
