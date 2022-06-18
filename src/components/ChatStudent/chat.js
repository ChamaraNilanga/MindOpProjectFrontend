import { useEffect } from "react";
import {Widget, addResponseMessage} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { io } from "socket.io-client";
import "./chat.css"


const socket = io("http://localhost:3000");

const Coursepage = () => {
useEffect(() => {
    socket.on('receive-message', (message) => {
        addResponseMessage(message);
    });
   
}, []);

    const handleNewUserMessage = (newMessage) => {
        // console.log(`New message incomming! ${newMessage}`);
        socket.emit('send-message', newMessage);
       

    }
    return (
        <div className="container">
            {/* <div className="row">
                <h1 className="text-center p-5 display-1">Course page</h1>
                </div> */}

                <Widget 
                title="Teacher's Name" handleNewUserMessage={handleNewUserMessage}/>
            </div>
    );
};

export default Coursepage;