import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ChatContent from '../views/ChatContent';
import ChatNav from '../views/ChatNav';
import { connect } from "react-redux";
import {
  getRooms as getRoomsAction,
  getRoom as getRoomAction,
  getRoomMessages as getRoomMessagesAction,
  addRoomMessage as addRoomMessageAction
} from '../redux/actions';


const StyledChatConsole = styled.div`
  display: flex;
  min-height: 100vh;

  div#personal p {
    width: 100%;
  }

  nav {
    min-width: 200px;
    background-color: #FF3008;
  }

  nav p {
    width: 100%;
    color: #ffffff;
    padding-left: 25px;
    padding-top: 25px;
    margin: 0;
  }

  nav p.selected-room {
    background-color: #8B0000;
  }

  section {
    width: 100%;
    background-color: #ffffff;
  }
`;

const propTypes = {
  match: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  startTime: PropTypes.Date,
  getRooms: PropTypes.function,
  getRoom: PropTypes.function,
  getRoomMessages: PropTypes.function,
  addRoomMessage: PropTypes.function
};

const defaultProps = {
  rooms: [],
  startTime: new Date(),
  getRooms: () => null,
  getRoom: () => null,
  getRoomMessages: () => null,
  addRoomMessage: () => null
};

function ChatConsole({ match, rooms, getRooms, startTime, getRoom, getRoomMessages, addRoomMessage }) {
  const { userName } = match.params;
  const [roomId, setRoomId] = useState(0);

  return (
    <StyledChatConsole>
        <ChatNav getRooms={getRooms} rooms={rooms} setRoomId={setRoomId}
                 roomId={roomId} userName={userName} startTime={startTime}>

        </ChatNav>
      <section>
        <ChatContent userName={userName} roomId={roomId ? roomId : 0} getRoom={getRoom} getRoomMessages={getRoomMessages} rooms={rooms} addRoomMessage={addRoomMessage} />
      </section>
    </StyledChatConsole>
  );
}

ChatConsole.propTypes = propTypes;
ChatConsole.defaultProps = defaultProps;

const mapStateToProps = ({ rooms }) => {
  return {
    rooms: rooms || []
  }
};

export default connect(mapStateToProps, {
  getRooms: getRoomsAction,
  getRoom: getRoomAction,
  getRoomMessages: getRoomMessagesAction,
  addRoomMessage: addRoomMessageAction
})(withRouter(ChatConsole));