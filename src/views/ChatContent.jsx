import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageAddForm from './MessageAddForm';
import MessagesTitle from './MessagesTitle';

const StyledChatContent = styled.div`
  .title-section {
    display: block;
    height: 100px;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    color: gray;
  }

  .add-message-section {
    height: 100px;
    background-color: #ffffff;
    border-top: 1px solid #e0e0e0;
  }
`;

const propTypes = {
  addRoomMessage: PropTypes.func,
  getRoom: PropTypes.func,
  getRoomMessages: PropTypes.func,
  roomId: PropTypes.number.isRequired,
  rooms: PropTypes.array,
  userName: PropTypes.string,
  addRoomMessageReaction: PropTypes.func
};

const defaultProps = {
  rooms: [],
  getRoom: () => null,
  getRoomMessages: () => null,
  userName: '',
  addRoomMessage: () => null,
  addRoomMessageReaction: () => null
};

function ChatContent({
  roomId,
  getRoom,
  getRoomMessages,
  rooms,
  userName,
  addRoomMessage,
  addRoomMessageReaction
}) {
  // load the selected room
  useEffect(() => {
    getRoom({ roomId });
  }, [getRoom, roomId]);

  // load the selected room messages
  useEffect(() => {
    getRoomMessages({ roomId });
  }, [getRoomMessages, roomId]);

  const selectedRoom = rooms.find(room => room.id === roomId);
  const name = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const users = selectedRoom && selectedRoom.users ? selectedRoom.users : [];
  const messages =
    selectedRoom && selectedRoom.messages ? selectedRoom.messages : [];

  // scroll to the bottom when messages change
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <StyledChatContent>
      <section className="title-section">
        <MessagesTitle name={name} userName={userName} users={users} />
      </section>
      <section className="messages-section">
        <MessageList
          addRoomMessageReaction={addRoomMessageReaction}
          messages={messages}
          messagesEndRef={messagesEndRef}
          userName={userName}
          roomId={roomId}
        />
      </section>
      <section className="add-message-section">
        <MessageAddForm
          addRoomMessage={addRoomMessage}
          messagesEndRef={messagesEndRef}
          roomId={roomId}
          scrollToBottom={scrollToBottom}
          userName={userName}
        />
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

export default ChatContent;
