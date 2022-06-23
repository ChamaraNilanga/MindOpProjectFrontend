import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';
import './chatteacher.css';
import axios from 'axios';
import { logDOM } from '@testing-library/react';

export default function Model(props) {

    const [show, setShow] = useState(false);
    const [messagedata, setMessagedata] = useState();


    const handleClose = () => {
        setShow(false);
      };
      const handleShow = () => {
        setShow(true);
      };
  
      function handleMessage(event){
        setMessagedata(event.target.value)
      }
  
    async function sendMessage(){
    // console.log(messagedata);
    // console.log(props.senderid);
    // console.log(props.receiverid);

        const data={
            messagebody:messagedata
        }
        await axios.post(`http://localhost:8052/message/${props.receiverid}&${props.senderid}`,data)
        .then((response)=>{
            console.log(response.data);
            handleClose();
        }
        )
        .catch((error)=>{
              console.log(error);
        })
      }


      const deletemsg=async ()=>{
        // console.log(id);
        if(window.confirm('Are you sure you want to delete?')){
            await axios.delete(`http://localhost:8052/message/${props.chatid}`)
            .then((res)=>{
                console.log(res.data);
                alert(res.data);
                props.onfresh();
            })
        }
       
      }

  return (
    <>
     <table className="table">
       
   
          <td scope="col">{props.senderid}</td>
          <td scope="col">{props.messagebody}</td>
          <td scope="col">{props.chattime}</td>
          <td className='chatbtn'>
          <button type="button" className="btndelete" onClick={()=>{deletemsg()}} >
          Delete
          </button>
          <button type="button" className="btnreply" onClick={()=>{handleShow()}}>Reply</button>
          </td>
        
      


    </table>
    <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Write your message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div>
            <div className="row mt-1">
              <label for="floatingTextarea2">Description:</label>
              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Update your feedback here"
                  id="review"
                  style={{ height: "100px" }}
                  onChange={handleMessage}
                ></textarea>
                <label for="floatingTextarea2">Comments...</label>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              sendMessage();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}
