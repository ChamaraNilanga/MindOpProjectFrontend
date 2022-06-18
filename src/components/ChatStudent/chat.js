import { useEffect } from "react";
import {Widget, addResponseMessage} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { io } from "socket.io-client";
import "./chat.css";
import React from "react";
// import "./sendMsg";

const socket = io("http://localhost:3000");

const Coursepage = () => {
useEffect(() => {
    socket.on('receive-message', (message) => {
        addResponseMessage(message);
    });
   
}, []);

    // const handleNewUserMessage = (newMessage) => {
    //     // console.log(`New message incomming! ${newMessage}`);
    //     socket.emit('send-message', newMessage);
       

    // }
    // return (
        // <div className="container">
        //     {/* <div className="row">
        //         <h1 className="text-center p-5 display-1">Course page</h1>
        //         </div> */}

        //         <Widget 
        //         title="Teacher's Name" handleNewUserMessage={handleNewUserMessage}/>
        //     </div>

              return (
                <div>
                  <input type="checkbox" id="check" /> 
                  <label className="chat-btn" htmlFor="check">
                    <i className="fa fa-commenting-o comment" /> 
                    <i className="fa fa-close close" /> </label>
                  <div className="wrapper">
                    <div className="chat-container">
                      <div className="chat-header">
                        <p id="your-name">John Paul</p>
                      </div>
                      <div className="chat-section">
                        <div className="main-wrapper">
                          <div className="chat-content">
                            <div className="message">
                              <div className="message-row other-message">
                                {/* <div class="message-title">
                                                       <span>Dev at</span>
                                                   </div>
                                                   <div class="message-text">
                                                      Hello
                                                   </div>
                                                   <div class="message-time">
                                                       April 20
                                                   </div> */}
                              </div>
                              <div className="message-row you-message">
                                {/* <div class="message-title">
                                                      <span>User 01</span>
                                                  </div>
                                                  <div class="message-text">
                                                     OK
                                                  </div>
                                                  <div class="message-time">
                                                      April 20
                                                  </div> */}
                                <div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div> <form className="msg-text">
                            <input type="text" name="msg" id="msg" placeholder="Type Here..." autoComplete="off" />
                            <button id="btn-send">Send</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              );
            }
      

export default Coursepage;