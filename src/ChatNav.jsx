import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import ChatContent from './ChatContent';
import { connect } from "react-redux";
import {
  getRooms as getRoomsAction
} from './redux/actions';

const StyledChatNav = styled.div`
  display: flex;
  min-height: 100vh;

  div#personal p {
    width: 100%;
  }

  p#myname {
    font-weight: bold;
    font-size: 20px;
    margin-top: 30px;
    height: 22px;
  }
  p#elapsed {
    font-size: 12px;
    height: 14px;
    margin-bottom: 35px;
  }
  nav {
    min-width: 200px;
    background-color: #FF3008;
  }
  nav p {
    width: 100%;
    height: 48px;
    margin: 10px;
    color: #ffffff;
    padding-left: 25px;
  }

  section {
    width: 100%;
    background-color: #ffffff;
  }
`;

const propTypes = {
  match: PropTypes.object.isRequired,
  rooms: PropTypes.array,
  getRooms: PropTypes.function
};

const defaultProps = {
  rooms: [],
  getRooms: () => null
};

function ChatNav({ match, rooms, getRooms }) {
  const { userName } = match.params;
  const [roomId, setRoomId] = useState(0);

    // load the list of rooms
    useEffect(() => { getRooms({roomId}); }, 
    [getRooms], roomId);

  return (
    <StyledChatNav>
      <nav>
        <div id="personal">
          <p id="myname">Maura Joglekar</p>
          <p id="elapsed">Online for 1 minutes</p>
        </div>
        {rooms.map(room => <p onClick={() => setRoomId(room.id)}>{room.name}</p>)}
      </nav>
      <section>
        <ChatContent roomId={roomId ? roomId : 0} />
      </section>
    </StyledChatNav>
  );
}

ChatNav.propTypes = propTypes;
ChatNav.defaultProps = defaultProps;

const mapStateToProps = ({rooms}) => {
  return {
    rooms: rooms || []
  }
};

export default connect(mapStateToProps, {
  getRooms: getRoomsAction
})(ChatNav);