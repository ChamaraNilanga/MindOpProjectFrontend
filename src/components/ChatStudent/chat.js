import React from 'react';
import io from 'socket.io-client';
import "./chat.css"


class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socket: null,
            messageList: []
        }
    }

    onMessageSend = (event) => {
        if (event.key === 'Enter') {
            this.state.socket.emit('onMessage', {message: event.target.value});
            this.setState({[event.target.id]: ''})
        }
    };

    async componentDidMount() {
        let socket = await io.connect('http://localhost:3010');
        socket.on('messageList', (data) => {
            console.log('Class: Chat, Function:  ==', data);
            this.setState({messageList: data})
        });
        console.log('Class: Chat, Function: componentDidMount ==', socket);
        this.setState({socket});

    }

    onTextChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    messageList = () => {
        return this.state.messageList.map(((data, key) =>
                <div key={key} style={{
                    color: 'black',
                    margin: '10px',
                    whiteSpace: 'nowrap',
                    width: '50%',
                    flexWrap: 'nowrap',
                    flexDirection: 'column',
                    float: data.senderId === this.state.socket.id ? 'right' : 'left',
                    textAlign: data.senderId === this.state.socket.id ? 'right' : 'left',

                }}>
                    <div style={{
                        width: '90%', padding: '10px',
                        borderRadius: '12px',
                        float: data.senderId === this.state.socket.id ? 'right' : 'left',
                        backgroundColor: 'rgb(220, 150, 20)'
                    }}>
                        <div style={{color: 'rgb(33, 28, 88)', marginBottom: '5px',fontSize:'13px'}}>
                            {data.senderId === this.state.socket.id ? 'You' : 'Anonymous'}
                        </div>
                        {data.message}
                    </div>
                </div>
        ))
    }

    render() {
        return (
            <div>
              <input type="checkbox" id="check" /> 
          <label className="chat-btn" htmlFor="check">
                    <i className="fa fa-commenting-o comment" /> 
                    <i className="fa fa-close close" /> </label>
          <div className='wrapper'>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                textAlign: 'center'
            }}>

                   
                 
  
                <div style={{
                    margin: '20px',
                    padding: '10px',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop:'50px'
                   
                }}>
                    <div id='chat-list'
                         style={{
                             overflowY: 'auto',
                             backgroundColor: '#2c394e40',
                             height: '600px',
                             width: '100%',
                             marginTop: 'auto',
                             borderRadius:'5px'
                         }}>
                        {this.messageList()}
                    </div>
                    <input value={this.state.messageInput} id='messageInput' onChange={this.onTextChange}
                           onKeyPress={this.onMessageSend} type="text"
                           placeholder="Type a message"
                           style={{padding: '10px', outline: 'none',borderRadius:'5px',backgroundColor: '#2c394e40'}}/>
                </div>
            </div>
            </div>
            </div>
        );

    }

}

export default Chat;