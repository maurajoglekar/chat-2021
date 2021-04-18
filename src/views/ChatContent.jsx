import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageList from './MessageList';
import AddMessageForm from "./AddMessageForm";

const StyledChatContent = styled.div`

section#title {
  display:flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #ffffff;
  border-bottom: 1px solid #E0E0E0;
} 

section#messages {
  max-height: calc(100vh - 250px);
  background-color: #f5f5f5;
  overflow-y: scroll;
  overflow-x: hidden;
} 

section#addMessage {
  height: 100px;
  background-color: #ffffff;
  border-top: 1px solid #E0E0E0;
} 
`;

const propTypes = {
  roomId: PropTypes.number,
  rooms: PropTypes.array,
  getRoom: PropTypes.function,
  getRoomMessages: PropTypes.function,
  userName: PropTypes.string,
  addRoomMessage: PropTypes.function
};

const defaultProps = {
  rooms: [],
  getRoom: () => null,
  getRoomMessages: () => null,
  userName: '',
  addRoomMessage: () => null
};

function ChatContent({ roomId, getRoom, getRoomMessages, rooms, userName, addRoomMessage }) {

  // load the selected room
  useEffect(() => { getRoom({ roomId }); },
    [getRoom, roomId]);

  // load the selected room
  useEffect(() => { getRoomMessages({ roomId }); },
    [getRoomMessages, roomId]);


  const selectedRoom = rooms.find(room => room.id === roomId);
  const name = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const users = selectedRoom && selectedRoom.users ? selectedRoom.users.join(', ') : '';
  const messages = selectedRoom && selectedRoom.messages ? selectedRoom.messages : [];

  return (
    <StyledChatContent>
      <section id="title">
        <div>
          <p>{name}</p>
          <p>{users}</p>
        </div>
      </section>
      <section id="messages">
        <MessageList messages={messages} userName={userName}></MessageList>
      </section>
      <section id="addMessage">
        <AddMessageForm userName={userName} addRoomMessage={addRoomMessage} roomId={roomId}></AddMessageForm>
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

export default ChatContent;