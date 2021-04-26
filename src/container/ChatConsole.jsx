import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ChatContent from "../views/ChatContent";
import ChatNav from "../views/ChatNav";
import { connect } from "react-redux";
import {
  getRooms as getRoomsAction,
  getRoom as getRoomAction,
  getRoomMessages as getRoomMessagesAction,
  addRoomMessage as addRoomMessageAction
} from "../redux/actions";

const StyledChatConsole = styled.div`
  display: flex;
  min-height: 100vh;

  section {
    width: 100%;
    background-color: #ffffff;
  }
`;

const propTypes = {
  match: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  getRooms: PropTypes.func,
  getRoom: PropTypes.func,
  getRoomMessages: PropTypes.func,
  addRoomMessage: PropTypes.func
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
      <ChatNav
        getRooms={getRooms}
        rooms={rooms}
        setRoomId={setRoomId}
        roomId={roomId}
        userName={userName}
      ></ChatNav>
      <section>
        <ChatContent
          userName={userName}
          roomId={roomId ? roomId : 0}
          getRoom={getRoom}
          getRoomMessages={getRoomMessages}
          rooms={rooms}
          addRoomMessage={addRoomMessage}
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
