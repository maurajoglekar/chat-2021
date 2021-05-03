import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNavList = styled.div`
  p {
    height: 48px;
  }

  p.selected-room {
    background-color: #8b0000;
  }
`;

const propTypes = {
  roomId: PropTypes.number.isRequired,
  rooms: PropTypes.array.isRequired,
  setRoomId: PropTypes.func.isRequired
};

export function NavList({ rooms, roomId, setRoomId }) {
  const sortedRooms = rooms.sort(function (a, b) {
    return ''.concat(a.name).localeCompare(b.name);
  });

  return (
    <StyledNavList>
      {sortedRooms.map(room => (
        <p
          key={room.id}
          data-test-id={`room-name-${room.id}`}
          className={room.id === roomId ? 'selected-room' : ''}
          onClick={() => setRoomId(room.id)}
        >
          {room.name}
        </p>
      ))}
    </StyledNavList>
  );
}

NavList.propTypes = propTypes;

export default NavList;
