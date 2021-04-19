import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageAddForm from "./MessageAddForm";
import MessagesTitle from "./MessagesTitle"

const StyledChatContent = styled.div`

.titleSection {
  display:block;
  height: 100px;
  background-color: #ffffff;
  border-bottom: 1px solid #E0E0E0;
  color: gray;
} 

.addMessageSection {
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

  return (
    <StyledChatContent>
      <section className="titleSection">
        <MessagesTitle name={name} users={users} userName={userName}></MessagesTitle>
      </section>
      <section className="messagesSection">
        <MessageList messages={messages} userName={userName}></MessageList>
      </section>
      <section className="addMessageSection">
        <MessageAddForm userName={userName} addRoomMessage={addRoomMessage} roomId={roomId}></MessageAddForm>
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

export default ChatContent;