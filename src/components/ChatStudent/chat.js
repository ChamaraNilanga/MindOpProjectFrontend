import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Model from "../ChatTeacher/model";
import Navbar from "../Navbar/Navbar";
import { Button } from "react-bootstrap";

function Requestmanagemodel() {
  const [inbox, setInbox] = useState([]);
  const [outbox, setOutbox] = useState([]);
  const [message, setMessage] = useState();

  function getReceivedMessages() {
    const userid = 2;
    axios
      .get(`http://localhost:8070/message/chat/${userid}`)
      .then((res) => {
        // console.log(res);
        setInbox(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  function getSendMessages() {
    const senderid = 2;
    axios
      .get(`http://localhost:8070/message/chat/send/${senderid}`)
      .then((res) => {
        // console.log(res);
        setOutbox(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    getSendMessages();
    getReceivedMessages();
  }, []);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleWriteMessage = async () => {
    var userid = 2;
    var teacherid = 4;
    const data = {
      messagebody: message,
    };
    axios
      .post(`http://localhost:8070/message/${userid}&${teacherid}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Navbar />
      <div class="container">
        <div className="d-flex justify-content-center m-4">
          <h1>Messages</h1>
        </div>
        <Tabs
          defaultActiveKey="Inbox"
          transition={Collapse}
          id="noanim-tab-example"
          className="mb-3 mt-4 row-g-2 d-flex justify-content-center"
        >
          <Tab eventKey="WriteAMessage" title="Write a Message">
            <div className="container">
              <div className="row rounded-3 mt-3 p-4 shadow border border-dark">
                <div className="mx-auto my-auto mb-3">
                  <h5>Write your message here...</h5>
                  <div className="form-floating mt-4 mb-2">
                    <textarea
                      class="form-control"
                      placeholder="Message"
                      id="message"
                      style={{ height: "300px" }}
                      onChange={handleMessage}
                    ></textarea>
                    <label for="floatingTextarea2">Message</label>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      onClick={handleWriteMessage}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="Inbox" title="Inbox">
            <div className="container">
              <div className="row g-3 rounded-3 shadow pb-3 pl-2 border border-light mt-4 mb-2 bg-primary">
                <div className="col-1">Sender</div>
                <div className="col-6">Message</div>
                <div className="col-2 d-flex justify-content-center">Time</div>
                <div className="col-2 d-flex justify-content-center">
                  Handle
                </div>
              </div>
              {inbox.map((chat) => {
                return (
                  <Model
                    chatid={chat.chatid}
                    senderid={chat.senderid}
                    messagebody={chat.messagebody}
                    chattime={chat.chattime}
                    receiverid={chat.receiverid}
                    onfresh={() => {
                      getReceivedMessages();
                      getSendMessages();
                    }}
                  />
                );
              })}
            </div>
          </Tab>

          <Tab eventKey="SendMSessage" title="Send messages">
            <div className="container">
              <div className="row g-3 rounded-3 shadow pb-3 pl-2 border border-light mt-4 mb-2 bg-primary">
                <div className="col-1">Sender</div>
                <div className="col-6">Message</div>
                <div className="col-2 d-flex justify-content-center">Time</div>
                <div className="col-2 d-flex justify-content-center">
                  Handle
                </div>
              </div>
              {outbox.map((chat) => {
                return (
                  <Model
                    chatid={chat.chatid}
                    senderid={chat.receiverid}
                    messagebody={chat.messagebody}
                    chattime={chat.chattime}
                    receiverid={chat.receiverid}
                    onfresh={getSendMessages}
                    status="outbox"
                  />
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
export default Requestmanagemodel;
