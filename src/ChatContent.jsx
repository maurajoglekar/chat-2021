import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from "react-redux";
import {
  getRoom as getRoomAction
} from './redux/actions';
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
  height: calc(100vh - 200px);
  background-color: #f5f5f5;
;
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
  getRoom: PropTypes.function
};

const defaultProps = {
  rooms: [],
  getRoom: () => null
};

function ChatContent({ roomId, getRoom, rooms }) {

  // load the selected room
  useEffect(() => { getRoom({ roomId }); },
    [getRoom, roomId]);

  const selectedRoom = rooms.find(room => room.id === roomId);
  const name = selectedRoom && selectedRoom.name ? selectedRoom.name : '';
  const users = selectedRoom && selectedRoom.users ? selectedRoom.users.join(', ') : '';

  return (
    <StyledChatContent>
      <section id="title">
        <div>
        <p>{name}</p>
        <p>{users}</p>
        </div>
      </section>
      <section id="messages">
        <p>Messages here</p>
      </section>
      <section id="addMessage">
        <p>input box and button</p>
      </section>
    </StyledChatContent>
  );
}

ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;

const mapStateToProps = ({ rooms }) => {
  return {
    rooms: rooms || []
  }
};

export default connect(mapStateToProps, {
  getRoom: getRoomAction
})(ChatContent);