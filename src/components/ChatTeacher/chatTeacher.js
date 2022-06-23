import React, { Component, useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./chatteacher.css";
import axios from "axios";
import Model from "./model";
import { Tabs, Tab } from "react-bootstrap";
import { Collapse } from "react-bootstrap";

function ChatTeacher() {
  const [message, setMessage] = useState([]);
  const [outbox, setOutbox] = useState([]);

  function getReceivedMessages() {
    const teacherid = 4;
    axios
      .get(`http://localhost:8070/message/chat/${teacherid}`)
      .then((res) => {
        // console.log(res);
        setMessage(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getReceivedMessages();
    getSendMessages();
  }, []);

  const getSendMessages = () => {
    const teacherid = 4;
    axios
      .get(`http://localhost:8070/message/chat/send/${teacherid}`)
      .then((res) => {
        console.log(res.data);
        setOutbox(res.data);
      })
      .catch((err) => {
        alert(err.message);
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
          <Tab eventKey="Inbox" title="Inbox">
            <div className="container">
              <div>
                <div className="teacherchatbox">
                  <div className="container">
                    <div className="row g-3 rounded-3 shadow pb-3 pl-2 border border-light mt-4 mb-2 bg-primary">
                      <div className="col-1">Sender</div>
                      <div className="col-6">Message</div>
                      <div className="col-2 d-flex justify-content-center">
                        Time
                      </div>
                      <div className="col-2 d-flex justify-content-center">
                        Handle
                      </div>
                    </div>
                  </div>
                  {message.map((chat) => {
                    return (
                      <Model
                        chatid={chat.chatid}
                        senderid={chat.senderid}
                        messagebody={chat.messagebody}
                        chattime={chat.chattime}
                        receiverid={chat.receiverid}
                        onfresh={() => {
                          getReceivedMessages(); getSendMessages();
                        }}
                      />
                    );
                  })}
                </div>
              </div>
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
export default ChatTeacher;
