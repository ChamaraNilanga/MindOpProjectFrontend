import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { MdRemoveRedEye } from 'react-icons/md';

function ThreeDotActions() {
  return (
    <div>
      <Dropdown>
      <Dropdown.Toggle><BsThreeDotsVertical className='BsThreeDotsVerticals'/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> <MdOutlineAddToPhotos/> Add activity or resourses</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><MdDelete/> Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><MdRemoveRedEye/> Hide</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default ThreeDotActions
