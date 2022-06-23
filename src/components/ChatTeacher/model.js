import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
// import './chatteacher.css';
import axios from "axios";
import { logDOM } from "@testing-library/react";

export default function Model(props) {
  const status = props.status;
  const [show, setShow] = useState(false);
  const [messagedata, setMessagedata] = useState();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  function handleMessage(event) {
    setMessagedata(event.target.value);
  }

  async function sendMessage() {
    // console.log(messagedata);
    // console.log(props.senderid);
    // console.log(props.receiverid);

    const data = {
      messagebody: messagedata,
    };
    await axios
      .post(
        `http://localhost:8070/message/${props.receiverid}&${props.senderid}`,
        data
      )
      .then((response) => {
        console.log(response.data);
        handleClose();
        props.onfresh();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deletemsg = async () => {
    // console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      await axios
        .delete(`http://localhost:8070/message/${props.chatid}`)
        .then((res) => {
          console.log(res.data);
          alert(res.data);
          props.onfresh();
        });
    }
  };

  return (
    <>
      {/* <table class="table">
    
       
     <tbody>
        <tr>
          <td className="col-1">{props.senderid}</td>
          <td className="col-6">{props.messagebody}</td>
          <td className="col-2">{props.chattime}</td>
          <td className='chatbtn col-2'>
          <button type="button" className="btndelete" onClick={()=>{deletemsg()}} >
          Delete
          </button>
          <button type="button" className="btnreply" onClick={()=>{handleShow()}}>Reply</button>
          </td>
        </tr>
        </tbody>
      


    </table> */}
      <div className="container">
        <div className="row g-3 rounded-3 shadow border border-success mt-2 mb-2">
          <div className="col-1">{props.senderid}</div>
          <div className="col-6">{props.messagebody}</div>
          <div className="col-2 d-flex justify-content-center">
            {props.chattime}
          </div>
          <div className="col-2 d-flex justify-content-center my-auto">
            <button
              type="button"
              class="btn btn-outline-danger mx-2"
              onClick={deletemsg}
            >
              Delete
            </button>
            {status === "outbox" ? (
              <></>
            ) : (
              <button
                type="button"
                class="btn btn-outline-success mx-2"
                onClick={handleShow}
              >
                Reply
              </button>
            )}
          </div>
        </div>
      </div>

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
  );
}
