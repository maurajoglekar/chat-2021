import styled from "styled-components";
import React, { Component } from "react";

const StyledMessageAddForm = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    width: 80%;
    margin: 40px 30px;
    height: 30px;
    padding: 10px 25px;
    font-size: 16px;
    color: gray;
    border: #bdbdbd solid 2px;
    color: gray;
  }

  button {
    width: 20%;
    font-size: 30px;
    background-color: #fff;
    border: #fff solid 0px;
    color: #6495ed;
    font-weight: bold;
    padding: 0;
  }
  
  button:focus {
    outline: 0;
  }
`;

const URL = 'ws://localhost:3030';

class MessageAddForm extends Component {

  constructor() {
     super();

     this.ws = new WebSocket(URL);
  }

  componentDidMount() {

        const { addRoomMessage, scrollToBottom } = this.props;

        this.ws.onopen = () => {
            console.log('connected')
        };

        this.ws.onmessage = evt => {
            // on receiving a message from someone in the chat
            const { message, userName, fromRoom }  = JSON.parse(evt.data);
            addRoomMessage({
                roomId: fromRoom,
                name: userName,
                message: message,
                writeToBE: false,
                doneCallback: scrollToBottom
            });
        };

        this.ws.onclose = () => {
            console.log('disconnected');
        }
  }

  addMessage =  e  => {
    const { userName, addRoomMessage, roomId, scrollToBottom } = this.props;
    if (this._newMessage.value !== "") {
      addRoomMessage({
        roomId,
        name: userName,
        message: this._newMessage.value,
        writeToBE: true,
        doneCallback: scrollToBottom
      });
      this.ws.send(JSON.stringify({message: this._newMessage.value, userName, fromRoom: roomId}));
    }
    this._newMessage.value = "";
    e.preventDefault();
  };

  render() {
    return (
        <StyledMessageAddForm>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Type a message..."
            ref={(a) => (this._newMessage = a)}
          />
          <button type="submit" onClick={this.addMessage}>
            Send
          </button>
        </StyledMessageAddForm>
    );
  }
}

export default MessageAddForm;
