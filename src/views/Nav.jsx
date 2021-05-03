import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavHeading from './NavHeading';
import NavList from './NavList';

const StyledNav = styled.nav`
  width: 20%;
  background-color: #ff3008;
  min-width: 200px;

  /* common styling for all paragraph's in nav, both in heading and list */
  div p {
    color: #ffffff;
    padding-left: 25px;
    padding-top: 25px;
    margin: 0;
  }
`;

const propTypes = {
  getRooms: PropTypes.func,
  roomId: PropTypes.number.isRequired,
  rooms: PropTypes.array,
  setRoomId: PropTypes.func,
  userName: PropTypes.string.isRequired
};

const defaultProps = {
  getRooms: () => null,
  rooms: [],
  setRoomId: () => null
};

export class Nav extends Component {
  componentDidMount() {
    const { getRooms } = this.props;
    getRooms();
    this.startTime = new Date();
  }

  render() {
    const { rooms, setRoomId, roomId, userName } = this.props;

    return (
      <StyledNav>
        <NavHeading startTime={this.startTime} userName={userName} />
        <NavList roomId={roomId} rooms={rooms} setRoomId={setRoomId} />
      </StyledNav>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
