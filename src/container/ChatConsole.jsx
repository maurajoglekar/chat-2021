import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ChatContent from '../views/ChatContent';
import Nav from '../views/Nav';
import {
  getRooms as getRoomsAction,
  getRoom as getRoomAction,
  getRoomMessages as getRoomMessagesAction,
  addRoomMessage as addRoomMessageAction
} from '../redux/actions';

const StyledChatConsole = styled.div`
  display: flex;
  min-height: 100vh;

  section {
    width: 100%;
    background-color: #ffffff;
  }
`;

const propTypes = {
  addRoomMessage: PropTypes.func,
  getRoom: PropTypes.func,
  getRoomMessages: PropTypes.func,
  getRooms: PropTypes.func,
  match: PropTypes.object.isRequired,
  rooms: PropTypes.array
};

const defaultProps = {
  rooms: [],
  getRooms: () => null,
  getRoom: () => null,
  getRoomMessages: () => null,
  addRoomMessage: () => null
};

function ChatConsole({
  match,
  rooms,
  getRooms,
  getRoom,
  getRoomMessages,
  addRoomMessage
}) {
  const { userName } = match.params;
  const [roomId, setRoomId] = useState(0);

  return (
    <StyledChatConsole>
      <Nav
        getRooms={getRooms}
        roomId={roomId}
        rooms={rooms}
        setRoomId={setRoomId}
        userName={userName}
      />
      <section>
        <ChatContent
          addRoomMessage={addRoomMessage}
          getRoom={getRoom}
          getRoomMessages={getRoomMessages}
          roomId={roomId || 0}
          rooms={rooms}
          userName={userName}
        />
      </section>
    </StyledChatConsole>
  );
}

ChatConsole.propTypes = propTypes;
ChatConsole.defaultProps = defaultProps;

const mapStateToProps = ({ rooms }) => {
  return {
    rooms: rooms || []
  };
};

export default connect(mapStateToProps, {
  getRooms: getRoomsAction,
  getRoom: getRoomAction,
  getRoomMessages: getRoomMessagesAction,
  addRoomMessage: addRoomMessageAction
})(withRouter(ChatConsole));
