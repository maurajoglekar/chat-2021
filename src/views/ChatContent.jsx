import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageAddForm from "./MessageAddForm";
import MessagesTitle from "./MessagesTitle"

const StyledChatContent = styled.div`

.title-section {
  display:block;
  height: 100px;
  background-color: #ffffff;
  border-bottom: 1px solid #E0E0E0;
  color: gray;
} 

.add-message-section {
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

  // load the selected room messages
  useEffect(() => { getRoomMessages({ roomId }); },
    [getRoomMessages, roomId]);

  const selectedRoom = rooms.find(room => room.id === roomId);
  const name = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const users = selectedRoom && selectedRoom.users ? selectedRoom.users : [];
  const messages = selectedRoom && selectedRoom.messages ? selectedRoom.messages : [];

  // scroll to the bottom when messages change
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <StyledChatContent>
      <section className="title-section">
        <MessagesTitle name={name} users={users} userName={userName}></MessagesTitle>
      </section>
      <section className="messages-section">
        <MessageList messages={messages} userName={userName} messagesEndRef={messagesEndRef}></MessageList>
      </section>
      <section className="add-message-section">
        <MessageAddForm userName={userName} addRoomMessage={addRoomMessage} roomId={roomId}
          messagesEndRef={messagesEndRef} scrollToBottom={scrollToBottom}></MessageAddForm>
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

export default ChatContent;