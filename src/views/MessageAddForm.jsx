import styled from "styled-components";
import React, { Component } from "react";

const StyledMessageAddForm = styled.div`
  .add-message-form {
    display: flex;
    justify-content: space-between;
  }

  .add-message-form input {
    width: 80%;
    margin: 40px 30px;
    height: 30px;
    padding: 10px 25px;
    font-size: 16px;
    color: gray;
    border: #bdbdbd solid 2px;
    color: gray;
  }

  .add-message-form button {
    font-size: 30px;
    background-color: #fff;
    border: #fff solid 0px;
    color: #6495ed;
    font-weight: bold;
  }
`;

class MessageAddForm extends Component {
  constructor() {
    super();

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(e) {
    const { userName, addRoomMessage, roomId, scrollToBottom } = this.props;
    if (this._newMessage.value !== "") {
      addRoomMessage({
        roomId,
        name: userName,
        message: this._newMessage.value,
        doneCallback: scrollToBottom
      });
    }
    this._newMessage.value = "";
    e.preventDefault();
  }

  render() {
    return (
      <StyledMessageAddForm>
        <form className="add-message-form">
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
        </form>
      </StyledMessageAddForm>
    );
  }
}

export default MessageAddForm;
