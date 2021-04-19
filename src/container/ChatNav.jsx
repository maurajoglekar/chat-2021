import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ChatContent from '../views/ChatContent';
import { connect } from "react-redux";
import {
  getRooms as getRoomsAction,
  getRoom as getRoomAction,
  getRoomMessages as getRoomMessagesAction,
  addRoomMessage as addRoomMessageAction
} from '../redux/actions';
import NavHeading from '../views/NavHeading';

const StyledChatNav = styled.div`
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

  nav p.selectedRoom {
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

function ChatNav({ match, rooms, getRooms, startTime, getRoom, getRoomMessages, addRoomMessage }) {
  const { userName } = match.params;
  const [roomId, setRoomId] = useState(0);

  // load the list of rooms
  useEffect(() => { getRooms({ roomId }); },
    [getRooms, roomId]);

  const sortedRooms = rooms.sort(function (a, b) {
    return "".concat(a.name).localeCompare(b.name);
  });

  return (
    <StyledChatNav>
      <nav>
        <NavHeading userName={userName} startTime={startTime}></NavHeading>
        {sortedRooms.map(room => <p className={room.id === roomId ? 'selectedRoom' : ''} key={room.id} onClick={() => setRoomId(room.id)}>{room.name}</p>)}
      </nav>
      <section>
        <ChatContent userName={userName} roomId={roomId ? roomId : 0} getRoom={getRoom} getRoomMessages={getRoomMessages} rooms={rooms} addRoomMessage={addRoomMessage} />
      </section>
    </StyledChatNav>
  );
}

ChatNav.propTypes = propTypes;
ChatNav.defaultProps = defaultProps;

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
})(withRouter(ChatNav));