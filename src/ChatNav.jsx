import React, { useEffect } from "react";
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

  nav a p {
    text-decoration: none;
  }
  section {
    width: 100%;
    background-color: #ffffff;
  }
  section > header {
    color: #ffffff;
    padding: 10px;
  }
  section > header > h1 {
    font-size: 2em;
  }
  section > header .description {
    font-style: italic;
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
  const { room } = match.params;

    // load the list of rooms
    useEffect(() => { getRooms(); }, 
    [getRooms]);

  return (
    <StyledChatNav>
      <nav>
        <div id="personal">
          <p id="myname">Maura Joglekar</p>
          <p id="elapsed">Online for 1 minutes</p>
        </div>
        {rooms.map(room =>  <NavLink to={`room/${room.id}`}>
          <p>{room.name}</p>
        </NavLink>)}
      </nav>
      <section>
        <ChatContent/>
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