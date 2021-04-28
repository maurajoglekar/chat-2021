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

class MessageAddForm extends Component {

  addMessage =  e  => {
    const { userName, addRoomMessage, roomId, scrollToBottom, ws } = this.props;
    if (this._newMessage.value !== "") {
      addRoomMessage({
        roomId,
        name: userName,
        message: this._newMessage.value,
        doneCallback: scrollToBottom
      });
      ws.send(JSON.stringify({message: this._newMessage.value, userName, fromRoom: roomId}));
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
